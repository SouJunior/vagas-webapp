/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            canada: ['Radio Canada', 'sans-serif'],
        },
        extend: {
            colors: {
                blue: {
                    lighter: '#ECF5FF',
                    light: '#086BCF',
                    DEFAULT: '#1165BA',
                    dark: '#014C97',
                },
                gray: {
                    light: '#FCFCFC',
                    DEFAULT: '#F3F3F3',
                    dark: '#C1C1C1',
                    darker: '#515050',
                },
            },
            backgroundImage: {
                'blue-gradient':
                    'linear-gradient(294.77deg, #0A67C7 50.32%, rgba(0, 114, 231, 0.67) 100%)',
            },
            screens: {
                'hd': '1440px',
            }
        },
    },
    plugins: [],
};
