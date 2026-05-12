import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#FFB6C8',
          'pink-deep': '#F472B6',
          'pink-hot': '#EC4899',
          gold: '#C9A227',
          'gold-light': '#F0D080',
          cream: '#FFF5F8',
          lavender: '#DDA0DD',
          'lavender-deep': '#9B59B6',
          white: '#FFFFFF',
          dark: '#4A1942',
          heart: '#FF6B8A',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        sparkle: 'sparkle 2s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        heartbeat: 'heartbeat 1.5s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(5deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
          '50%': { opacity: '0.6', transform: 'scale(1.3) rotate(180deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.15)' },
          '50%': { transform: 'scale(1)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'shimmer-gold': 'linear-gradient(90deg, #C9A227 0%, #F0D080 50%, #C9A227 100%)',
      },
      boxShadow: {
        pink: '0 8px 30px rgba(236, 72, 153, 0.25)',
        'pink-lg': '0 12px 40px rgba(236, 72, 153, 0.35)',
        gold: '0 4px 15px rgba(201, 162, 39, 0.3)',
      },
    },
  },
  plugins: [],
} satisfies Config