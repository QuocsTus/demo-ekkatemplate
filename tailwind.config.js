/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Đè lên font mặc định của Tailwind
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      screens: {
        'xs': '320px',      // Mobile - Extra Small
        'sm': '640px',      // Tablet - Small
        'md': '768px',      // Tablet - Medium
        'lg': '992px',      // Desktop - Large
        'xl': '1200px',     // Desktop - Extra Large
        '2xl': '1400px',    // Desktop - 2XL
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          'xs': '0.75rem',
          'sm': '1rem',
          'md': '1.5rem',
          'lg': '2rem',
          'xl': '2rem',
          '2xl': '2rem',
        },
        screens: {
          'xs': '320px',
          'sm': '640px',
          'md': '768px',
          'lg': '992px',
          'xl': '1200px',
          '2xl': '1400px',
        },
      },
      maxWidth: {
        'container-xs': '320px',
        'container-sm': '640px',
        'container-md': '768px',
        'container-lg': '992px',
        'container-xl': '1200px',
        'container-2xl': '1400px',
      },
    },
  },
  plugins: [],
}