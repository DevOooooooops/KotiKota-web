import type { Config } from 'tailwindcss';

import theme from 'daisyui/src/theming/themes';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    theme: 'light',
    themes: [
      {
        light: {
          ...theme['light'],
          primary: '#22c55e',
          secondary: '#86efac',
          tertiary: '86efad9c',
          accent: '#f5f5f4',
          neutral: '#d4d4d4',
          white: '#f8fafc',
          black: '#334155',
          error: '#dc2626',
          success: '#16a34a',
          info: '#2563eb',
          warning: '#facc15',
        },
      },
    ],
  },
};
export default config;
