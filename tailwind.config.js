
  export default {
    content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          accent: {
            primary: '#FF6B00',
            secondary: '#FFA500',
            dark: '#CC5500',
          },
          dark: {
            bg: '#121212',
            surface: '#1E1E1E',
            text: '#E0E0E0',
            muted: '#A0A0A0'
          }
        },
        animation: {
          'slide-in': 'slideInRight 0.5s ease-out',
          'fade-in': 'fadeIn 0.3s ease-in',
          'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }
      }
    },
    plugins: []
  }
  