/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FCF9F5',
          100: '#F9F4EB',
          200: '#F1E9D9',
          300: '#E9DEC7',
          400: '#E2D5C3',
          500: '#D6C7AF',
          600: '#C4B397',
          700: '#B09E7F',
          800: '#8E7D63',
          900: '#6A5E4A',
        },
        charcoal: {
          50: '#F0F0F0',
          100: '#E0E0E0',
          200: '#C2C2C2',
          300: '#A3A3A3',
          400: '#858585',
          500: '#666666',
          600: '#525252',
          700: '#383838',
          800: '#292929',
          900: '#1A1A1A',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        "spektr-cyan-50": "#e6f1f5",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg')",
        'about-pattern': "url('https://e8ydux5zsn.ufs.sh/f/M32Ap1J2mMfXI8zoIBdbcwULXAp8CNQvM70RaOHEd32FtPTZ')",
        'products-pattern': "url('https://e8ydux5zsn.ufs.sh/f/M32Ap1J2mMfXn2veXBRzkh2ODjGZ8fabc9T341uVsJQSFUCW')",
        'contact-pattern': "url('https://e8ydux5zsn.ufs.sh/f/M32Ap1J2mMfXbsXgEhZMP0wQuSliUBOZtxHkobjsmrfAq7eX')",
      },
    },
  },
  plugins: [],
};