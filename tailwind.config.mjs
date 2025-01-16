/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            'a': {
              color: 'var(--tw-prose-links)',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            'pre': {
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
            },
            'code': {
              backgroundColor: '#f3f4f6',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
            },
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}