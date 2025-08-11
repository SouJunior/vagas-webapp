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
                    lightTransparent: '#338AFF33',
                    DEFAULT: '#1165BA',
                    dark: '#014C97',
                    dark200: '#003986',
                },
                gray: {
                    light: '#FCFCFC',
                    DEFAULT: '#F3F3F3',
                    dark: '#C1C1C1',
                    darker: '#515050',
                },
            },
            backgroundImage: {
                'hero-pattern':
                    "url('https://cdn.discordapp.com/attachments/1053386017589178470/1069996612799189064/Circles-details.png'), linear-gradient(294.77deg, rgba(10, 103, 199, 1) 50.32%, rgba(0, 114, 231, 0.67) 100%)",
            },
            screens: {
                sm: '640px',
                hd: '1456px',
            },
        },
    },
    plugins: [],
};
