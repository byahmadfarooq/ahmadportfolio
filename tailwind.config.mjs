export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#fbfbfd',
        text: '#1d1d1f',
        secondary: '#86868b',
        body: '#6e6e73',
        border: '#e8e8ed',
        accent: '#1d1d1f',
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
      borderRadius: { cta: '12px', card: '16px' },
      maxWidth: { site: '1200px' },
    },
  },
};
