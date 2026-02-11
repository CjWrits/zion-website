// Tailwind CSS configuration
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Content paths for Tailwind to scan
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom color palette
      colors: {
        primary: '#1a1a1a',
        secondary: '#2a2a2a',
        accent: '#4a90e2',
      },
      // Custom font family
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
