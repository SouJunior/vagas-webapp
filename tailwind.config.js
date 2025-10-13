/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    keyframes: {
      'fade-in-up': {
        '0%': {
          opacity: '0',
          transform: 'translateY(20px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
    },
    animation: {
      'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
    },
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
          light300: '#338AFF',
          DEFAULT: '#1165BA',
          dark: '#014C97',
          200: '#003986',
          300: '#002C66',
          400: '#001633',
          600: '#338AFF',
          800: '#003986',
        },
        gray: {
          light: '#FCFCFC',
          DEFAULT: '#F3F3F3',
          dark: '#C1C1C1',
          darker: '#515050',
          disabled: '#DEDEDE',
          background: '#CCC',
        },
        green: {
          600: '#72C270',
          800: '#149911',
        },
        red: {
          600: '#FF1F00',
          800: '#A31400',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      screens: {
        sm: '640px',
        hd: '1456px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },

  plugins: [require('tailwindcss-animate')],
};
