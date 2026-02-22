'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import DiscordBubble from '@/components/DiscordBubble';
import SocialBubbles from '@/components/SocialBubbles';
import SpotlightCursor from '@/components/SpotlightCursor';

const portfolioData: Record<string, any> = {
  'rahul-wakhale': {
    name: 'Rahul Wakhale',
    role: 'Co-Founder',
    institution: 'IIT Jodhpur',
    year: 'AI & Data Science Student',
    image: '/rhul.jpeg',
    galaxyColor: '#3B82F6',
    bio: 'I am an AI and Data Science student at IIT Jodhpur with a technical background spanning web3, AI, and applied engineering systems. I have six years of hands-on experience working in the web3 ecosystem, where I contributed to product development, decentralized applications, and emerging blockchain-based solutions. Currently, my focus is on artificial intelligence, data-driven systems, and innovation-oriented problem solving. I have worked across multiple domains including software development, machine learning, robotics, and IoT, with an emphasis on building practical, deployable solutions rather than purely theoretical work. I operate as a digital nomad and am currently based in India.',
    languages: ['English', 'Hindi', 'Marathi'],
    skills: ['Front-end Development', 'Data Structures and Algorithms (DSA)', 'Data Science', 'Web3 and Blockchain Systems', 'Robotics and Internet of Things (IoT)', 'Artificial Intelligence & Machine Learning'],
    achievements: ['Founder of Zion', 'Successfully completed 30+ technical projects across AI, web3, and software development', 'Winner of multiple hackathons focused on problem-solving and innovation', 'Six years of professional experience in the web3 domain', 'Served as Head of the ATL (Atal Tinkering Lab) during school, leading technical and innovation initiative'],
    social: {
      discord: 'tomodachininja',
      linkedin: 'https://www.linkedin.com/in/rahulwakhale/',
      instagram: 'https://www.instagram.com/rahulwakhale',
      twitter: 'https://x.com/Tomodachi_Ninja',
      github: 'https://github.com/TomodachiNinja',
      email: 'Rahul@zioncommunity.in',
    }
  },
  'ayush-shrivastava': {
    name: 'Ayush Shrivastava',
    role: 'Community Manager',
    institution: 'BBDITM',
    year: 'Second Year',
    image: '/par.jpeg',
    galaxyColor: '#8B5CF6',
    bio: 'I am a passionate developer with a strong interest in both software and hardware technologies. I have experience building responsive websites, creating practical tech solutions, and continuously learning modern tools like the MERN stack. Along with coding, I work on electronics projects using Arduino, sensors, and basic circuits. I am also a video editor with a creative mindset. For the two years, I have worked with an NGO, counseling and mentoring students to help them grow academically and personally.',
    languages: ['English', 'Hindi', ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'MERN Stack', 'Responsive Web Development', 'Video Editing', 'Arduino Projects', 'Circuit Design', 'Communication', 'Teamwork', 'Mentoring'],
    achievements: ['Built multiple web development projects', 'Completed hardware and sensor-based Arduino projects', 'Worked as a video editor for digital content', 'Two years of student counseling and mentoring through NGO work', 'Continuously improving full-stack and technical skills'],
    social: {
      discord: '#',
      linkedin: 'https://www.linkedin.com/in/ayush-shrivastava-218417332?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      instagram: 'https://www.instagram.com/ayux_lyf?igsh=eW03OGpkanZoajFl',
      twitter: 'https://x.com/AyushShri55',
      github: 'https://github.com/ayushshrivastava555',
    }
  },
  'prashansa-doharey': {
    name: 'Prashansa Doharey',
    role: 'Social Media Manager',
    institution: 'Mandsaur University',
    year: 'Second Year',
    image: '/prashansa.jpeg',
    galaxyColor: '#EC4899',
    bio: 'I am a learner focused on artificial intelligence, application development, and web development. I actively explore how modern technologies can be applied to build functional software products. My approach to coding is experimental and iterative, with an emphasis on learning through practice. I identify as a communist and bring strong ideological clarity and critical thinking into discussions and technical problem-solving. Alongside technical learning, I place importance on communication and structured argumentation.',
    languages: ['English', 'Hindi'],
    skills: ['HTML', 'CSS', 'Python', 'JavaScript', 'Professional Communication', 'React'],
    achievements: ['Hackathon Winner', 'Won Multiple Debates'],
    social: {
      discord: '#',
      linkedin: 'https://www.linkedin.com/in/prashansa-doharey-5311a5330',
      instagram: 'https://www.instagram.com/prashnapatrika',
      twitter: '#',
      github: 'https://github.com/prashansadoharey',
    }
  },
  'chirag-gupta': {
    name: 'Chirag Gupta',
    role: 'CTO',
    institution: 'BBDITM',
    year: 'Second Year',
    image: '/cj.jpeg',
    galaxyColor: '#10B981',
    bio: 'Full-stack developer with hands-on experience building and deploying scalable web applications using the MERN stack. Strong understanding of frontend and backend development, API integration, authentication systems, and server-side deployment. Experienced in independently developing complete applications from concept to production.',
    languages: ['English', 'Hindi', 'Marwadi',], 
    skills: ['MERN Stack', 'Next.js', 'JavaScript', 'TypeScript', 'Python', 'React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'REST APIs', 'Git', 'GitHub'],
    achievements: ['HackerRank JavaScript Certification', 'Responsive Web Design Certification (freeCodeCamp)', 'Cisco Introduction to Cybersecurity Certification', 'ISC2 Candidate', 'C++ Programming Certification (Saylor Academy)', 'Linux Unhatched (Cisco)', 'Ethical Hacking Workshop'],
    social: {
      discord: '#',
      linkedin: 'https://www.linkedin.com/in/chirag-gupta-79019232b/',
      instagram: 'https://www.instagram.com/cj.writs_/',
     
      github: 'https://github.com/CjWrits',
      gitlab: 'https://gitlab.com/cjwrits',
    }
  },
  'saiyam-jain': {
    name: 'Saiyam Jain',
    role: 'Recruiter',
    institution: 'BVIMR (IPU)',
    year: 'Second Year',
    image: '/sai.jpeg',
    galaxyColor: '#F59E0B',
    bio: ' I am a technology-focused student with a strong interest in software development and problem solving. I actively work on learning and building technical projects while developing a solid foundation in programming and core computer science concepts. My current areas of focus include C programming, data structures and algorithms, and web development. I spend time experimenting with new ideas, implementing small to mid-scale projects, and improving my understanding of how systems work at a practical level.',
    languages: ['English', 'Hindi',],
    skills: ['HTML', 'CSS', 'Basic JavaScript', 'C Programming', 'Data Structure and Algorithms in C', 'MERN', 'Basic TypeScript'],
    achievements: ['Building cool tech projects', 'Exploring new technologies', 'Problem solving enthusiast'],
    social: {
      discord: '#',
      linkedin: 'https://www.linkedin.com/in/saiyam-jain-468-/',
      instagram: 'https://www.instagram.com/saiyamjain343/',
    
      github: 'https://github.com/SaiyamJain468',
      email: 'saiyam468@gmail.com',
    }
  },
  'jalaj-jain': {
    name: 'Jalaj Jain',
    role: 'Co-Founder',
    institution: 'Digital Nomad',
    year: 'Based in India',
    image: '/j.png',
    galaxyColor: '#EF4444',
    bio: 'I am a digital nomad currently based in India with eight years of experience in development and technical operations. I work full-time in development, focusing on building and managing practical systems with real-world use cases. Alongside development, I am involved in production-oriented work, including cinematography, scriptwriting, and related creative processes. This combination allows me to operate across both technical execution and production planning, contributing to projects that require coordination between engineering and creative teams.',
    languages: ['English', 'Hindi', 'Telugu'],
    skills: ['Hackathon-Based Problem Solving', 'Business Foundations and Operations', 'Business Intelligence', 'Team Building and Technical Leadership', 'Linux System Operations', 'Video Production and Cinematography'],
    achievements: ['Co-Founder Zion', 'Completed 38+ projects across development, operations, and production domains', 'CCIO certification with 15+ successfully closed investigation cases', 'Received 15+ awards for technical and operational contributions', 'Hackathons Participated in 15+', 'Years of Experience 8+'],
    social: {
      discord: '#',
      linkedin: 'https://www.linkedin.com/in/jlaj-jain/',
      instagram: 'https://www.instagram.com/jlajjain/',
      twitter: 'https://x.com/JalajJa36705056',
      github: 'https://github.com/intruder0007',
      gitlab: 'https://gitlab.com/intruder0007',
      email: 'jlaj@zioncommunity.in',
    }
  },
};

export default function PortfolioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const member = portfolioData[slug];

  if (!member) {
    notFound();
  }

  return (
    <>
      <DiscordBubble />
  
      {/* Entrance animation overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed inset-0 z-50 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${member.galaxyColor}, #0f172a)` }}
      >
        {/* Particle burst */}
        {[...Array(50)].map((_, i) => {
          const angle = (i / 50) * Math.PI * 2;
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: member.galaxyColor,
                left: '50%',
                top: '50%',
                boxShadow: `0 0 20px ${member.galaxyColor}`,
              }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{
                x: Math.cos(angle) * 800,
                y: Math.sin(angle) * 800,
                opacity: 0,
                scale: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: 'easeOut',
              }}
            />
          );
        })}
        
        {/* Central glow */}
        <motion.div
          className="absolute inset-0"
          style={{ background: `radial-gradient(circle, ${member.galaxyColor}, transparent 60%)` }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      <main className="min-h-screen bg-slate-900 relative">
      {/* Animated background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 20% 50%, ${member.galaxyColor}15 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, ${member.galaxyColor}10 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, ${member.galaxyColor}08 0%, transparent 50%)`,
        }} />
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${(i * 7.3) % 100}%`,
              top: `${(i * 13.7) % 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: (i % 3) + 2,
              repeat: Infinity,
              delay: (i % 5) * 0.4,
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-20">
        <Link href="/#team" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          ← Back to Team
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Left: Image and Basic Info */}
          <div className="md:sticky md:top-20 md:self-start">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -30 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
              className="relative"
              style={{ perspective: '1000px' }}
            >
              <div className="absolute inset-0 rounded-3xl blur-3xl opacity-30" style={{ background: member.galaxyColor }} />
              <div className="relative bg-slate-800/30 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/30">
                <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden mb-6"
                  style={{ 
                    boxShadow: `0 10px 40px ${member.galaxyColor}40`,
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>
                <h1 className="text-4xl font-bold text-white text-center mb-2">{member.name}</h1>
                <p className="text-xl text-center mb-2" style={{ color: member.galaxyColor }}>{member.role}</p>
                {member.institution && <p className="text-gray-400 text-center">{member.institution}</p>}
                {member.year && <p className="text-gray-500 text-center text-sm">{member.year}</p>}
              </div>
            </motion.div>
          </div>

          {/* Right: Details */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">About</h2>
              <p className="text-gray-300 leading-relaxed">{member.bio}</p>
            </motion.div>

            {member.languages && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.05, duration: 0.8, ease: 'easeOut' }}
              >
                <h2 className="text-2xl font-bold text-white mb-4">Languages</h2>
                <div className="flex flex-wrap gap-3">
                  {member.languages.map((language: string) => (
                    <span
                      key={language}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-slate-800/50 text-gray-300 border border-slate-700"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
              <div className="flex flex-wrap gap-3">
                {member.skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{ 
                      backgroundColor: `${member.galaxyColor}20`,
                      color: member.galaxyColor,
                      border: `1px solid ${member.galaxyColor}40`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Achievements</h2>
              <ul className="space-y-2">
                {member.achievements.map((achievement: string, index: number) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="mr-2" style={{ color: member.galaxyColor }}>✦</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Connect</h2>
              <SocialBubbles social={member.social} inline />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
    </>
  );
}
