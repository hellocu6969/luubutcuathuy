/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
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
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Liquid Glass Tokens
        surface: "var(--bg-surface)",
        subtle: "var(--bg-subtle)",
        elevated: "var(--bg-elevated)",
        "glass-tint": "var(--glass-tint)",
        "glass-frost": "var(--glass-frost)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.glass': {
          'background': 'var(--glass-tint)',
          'backdrop-filter': 'blur(var(--blur-md))',
          'border': '1px solid var(--glass-frost)',
          'box-shadow': 'var(--shadow-soft)',
        },
        '.glass-strong': {
          'background': 'var(--bg-elevated)',
          'backdrop-filter': 'blur(var(--blur-lg))',
          'border': '1px solid var(--border-default)',
          'box-shadow': 'var(--shadow-deep)',
        },
        '.glass-subtle': {
          'background': 'var(--bg-subtle)',
          'backdrop-filter': 'blur(var(--blur-sm))',
          'border': '1px solid transparent',
        },
        '.text-shadow-sm': {
          'text-shadow': '0 1px 2px rgba(0,0,0,0.1)',
        },
      })
    })
  ],
}
