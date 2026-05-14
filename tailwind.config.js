/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', md: '2rem', lg: '3rem' },
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0B0F19',
          surface: '#111827',
          elevated: '#0F1626',
        },
        ink: {
          DEFAULT: '#E6EAF2',
          muted: '#9AA3B2',
          dim: '#6B7280',
        },
        accent: {
          blue: '#3B82F6',
          indigo: '#6366F1',
          purple: '#8B5CF6',
          cyan: '#22D3EE',
          violet: '#A78BFA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Sora"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.15), transparent 60%), radial-gradient(circle at 80% 80%, rgba(34,211,238,0.10), transparent 50%)',
        'gradient-accent':
          'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #22D3EE 100%)',
        'gradient-text':
          'linear-gradient(135deg, #E6EAF2 0%, #A78BFA 50%, #22D3EE 100%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(139,92,246,0.18), 0 10px 40px -10px rgba(99,102,241,0.35)',
        soft: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 30px 60px -30px rgba(0,0,0,0.7)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.95)', opacity: '0.7' },
          '70%': { transform: 'scale(1.4)', opacity: '0' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        float: 'float 6s ease-in-out infinite',
        pulseRing: 'pulseRing 2.4s cubic-bezier(0.215,0.61,0.355,1) infinite',
        gradientShift: 'gradientShift 8s ease infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
