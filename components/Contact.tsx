'use client';

// Contact form section with form handling
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);
  const y2 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [20, -20]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 3000);
      }
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-32 " ref={ref}>
      <motion.div className="max-w-4xl mx-auto px-4 md:px-6" style={{ opacity }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ y }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ y: y2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-slate-500 transition-colors text-white placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-slate-500 transition-colors text-white placeholder-gray-400"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-slate-500 transition-colors resize-none text-white placeholder-gray-400"
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors"
          >
            {submitted ? 'Message Sent!' : error ? 'Failed to Send' : 'Send Message'}
          </motion.button>
          {error && (
            <p className="text-red-400 text-sm text-center">Failed to send message. Please try again.</p>
          )}
        </motion.form>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{ y: y3 }}
          className="mt-12 md:mt-16 text-center text-gray-300 text-sm md:text-base"
        >
          <p className="mb-4">© 2026 Zion Community. All rights reserved.</p>
          <p className="italic">"For the people, by the people, with the people"</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
