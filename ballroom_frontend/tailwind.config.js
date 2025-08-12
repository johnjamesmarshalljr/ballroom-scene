/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            colors: {
                background: '#FFFFFF', // pure white background
                surface: '#F7FAFC', // very light gray for cards
                primary: '#22223B', // deep blue-gray for text and accents
                secondary: '#4A5568', // muted dark gray for secondary text
                accent: '#3182CE', // soft blue accent
                border: '#E2E8F0', // light gray for borders
            },
            fontFamily: {
                display: ['Orbitron', 'ui-sans-serif', 'system-ui'],
                body: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
            boxShadow: {
                neon: '0 0 8px #00F0FF, 0 0 16px #FF4FCE',
            },
        },
    },
    plugins: [],
};
