module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}