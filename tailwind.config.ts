import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        navy: '#003754',
        'dark-navy': '#003245',
        'deep-navy': '#1a2e4a',
        'bright-blue': '#00a7ef',
        'medium-blue': '#016ba4',
        'light-blue': '#7db7d8',
        'pale-blue': '#a6cfe7',
        'ice-blue': '#bfebff',
        'lightest-blue': '#e3f6ff',
        'cloud-blue': '#edf4ff',
        
        // Neutral Colors
        'off-white': '#fcfcfc',
        'cream': '#f5f3ef',
        'light-gray': '#f3f4f6',
        'lighter-gray': '#f4f4f4',
        'border-gray': '#d1d5db',
        'mid-gray': '#b2b2b2',
        'text-gray': '#6f6f6f',
        'dark-gray': '#4d4d4d',
        
        // Warm Accent Colors
        'rust': '#c3553c',
        'salmon': '#d69478',
        'peach': '#e69f81',
        'light-peach': '#f0b8a0',
        'cream-peach': '#f7ceb0',
        'light-cream': '#fbe0c7',
        'apricot': '#ffc3aa',
        'gold': '#ffd19c',
        'yellow': '#fff0be',
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
        'jakarta': ['var(--font-jakarta)', 'sans-serif'],
      },
      maxWidth: {
        'content': '1170px',
        'full-hd': '1920px',
      },
    },
  },
  plugins: [],
};

export default config;
