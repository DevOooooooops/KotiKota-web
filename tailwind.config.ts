import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [require('daisyui')],
  daisyui: {
    theme: 'light',
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#22c55e',
          secondary: '#86efac',
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
