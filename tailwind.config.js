/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sky:          '#1D6FE8',
        navy:         '#0F2A4A',
        'bg-alt':     '#EFF6FF',
        'card-bg':    '#FFFFFF',
        'card-border':'#E2E8F0',
        'text-primary':'#1A2B3C',
        'text-muted': '#6B7280',
        'red-before': '#E24B4A',
      },
      fontFamily: {
        heading: ['"Poppins"', 'sans-serif'],
        body:    ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
