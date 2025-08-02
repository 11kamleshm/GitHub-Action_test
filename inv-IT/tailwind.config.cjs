/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {

       fontSize: {
        'fluid-logo': 'clamp(1.75rem, 1.5rem + 1.5vw, 2.25rem)', 
        // Example: clamp(MIN, PREFERRED, MAX)
        'fluid-7xl': 'clamp(3.25rem, 2.5rem + 4vw, 5rem)',       // For main hero titles
        'fluid-6xl': 'clamp(2.75rem, 2rem + 3.5vw, 4.25rem)',    // For large section titles
        'fluid-5xl': 'clamp(2.25rem, 1.75rem + 2.5vw, 3.75rem)',   // For smaller section titles
        'fluid-2xl': 'clamp(1.25rem, 1rem + 1vw, 1.5rem)',       // For body text, like hero paragraph
      },
    },
  },
  plugins: [],
}
