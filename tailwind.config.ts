import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#009B7B',
          blue: '#2970FF',
          pink: '#E93A63',
          purple: '#6C3DCE',
          orange: '#F4A21B',
          violet: '#8B5CF6',
        },
      },
      boxShadow: {
        card: '0 20px 60px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
