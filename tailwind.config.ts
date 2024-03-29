import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
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
          neutral: '#94a3b8',
          white: '#f8fafc',
          black: '#334155',
          error: '#dc2626',
          success: '#16a34a',
          info: '#2563eb',
          warning: 'rgb(234 179 8)',
        },
      },
    ],
  },
};
export default config;
