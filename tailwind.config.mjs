/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '360px',
        '2xs': '411px',
      },
      fontFamily: {
        body: ["Outfit", "Arial", "sans-serif"],
        heading: ["Outfit", "Arial", "sans-serif"],
        mono: ["Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
      },
      aspectRatio: {
        'landscape': '4 / 3',
        'portrait':  '3 / 4', 
        'ultrawide': '18 / 5',
        'golden':    '1.6180 / 1',
        'rrss':      '1.91 / 1',
      },
      gridTemplateColumns: {
        '1-2': 'minmax(0, 1fr) minmax(0, 2fr)',
        '2-1': 'minmax(0, 2fr) minmax(0, 1fr)',
        '1-3': 'minmax(0, 1fr) minmax(0, 3fr)',
        '3-1': 'minmax(0, 3fr) minmax(0, 1fr)',
        '1-4': 'minmax(0, 1fr) minmax(0, 4fr)',
        '4-1': 'minmax(0, 4fr) minmax(0, 1fr)',
        '2-3': 'minmax(0, 2fr) minmax(0, 3fr)',
        '3-2': 'minmax(0, 3fr) minmax(0, 2fr)',
        '1-2-1': 'minmax(0, 1fr) minmax(0, 2fr) minmax(0, 1fr)',
        '1-1-2': 'minmax(0, 1fr) minmax(0, 1fr) minmax(0, 2fr)',
        '2-1-1': 'minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr)',
        '2-1-2': 'minmax(0, 2fr) minmax(0, 1fr) minmax(0, 2fr)',
        '2-2-1': 'minmax(0, 2fr) minmax(0, 2fr) minmax(0, 1fr)',
        '1-3-1': 'minmax(0, 1fr) minmax(0, 3fr) minmax(0, 1fr)',
        '1-1-3': 'minmax(0, 1fr) minmax(0, 1fr) minmax(0, 3fr)',
        '3-1-1': 'minmax(0, 3fr) minmax(0, 1fr) minmax(0, 1fr)',
        '1-3-2': 'minmax(0, 1fr) minmax(0, 3fr) minmax(0, 2fr)',
        '2-3-1': 'minmax(0, 2fr) minmax(0, 3fr) minmax(0, 1fr)',
        '1-2-3': 'minmax(0, 1fr) minmax(0, 2fr) minmax(0, 3fr)',
        '2-1-3': 'minmax(0, 2fr) minmax(0, 1fr) minmax(0, 3fr)',
        '3-2-1': 'minmax(0, 3fr) minmax(0, 2fr) minmax(0, 1fr)',
        '3-1-2': 'minmax(0, 3fr) minmax(0, 1fr) minmax(0, 2fr)',
        '1-4-1': 'minmax(0, 1fr) minmax(0, 4fr) minmax(0, 1fr)',
        '1-1-4': 'minmax(0, 1fr) minmax(0, 1fr) minmax(0, 4fr)',
        '4-1-1': 'minmax(0, 4fr) minmax(0, 1fr) minmax(0, 1fr)',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--tw-prose-text)',
            '--tw-prose-headings': 'var(--tw-prose-text)',
            fontFamily: 'Outfit, Arial, sans-serif',
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: 'Outfit, Arial, sans-serif',
              fontWeight: '700',
            },
            'p, li': {
              fontFamily: 'Outfit, Arial, sans-serif',
            },
            pre: {
              padding: '1rem',
              borderRadius: '0.5rem',
              backgroundColor: '#282a36',
            },
            code: {
              backgroundColor: '#282a36',
              color: '#f8f8f2',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontFamily: 'var(--tw-prose-mono)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
  ],
}