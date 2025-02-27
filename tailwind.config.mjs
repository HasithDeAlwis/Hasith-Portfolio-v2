/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class'],
  content: ['./apps/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: ['dark'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1400px',
      '3xl': '1600px',
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        body: ['poppins', 'sans-serif'],
        display: ['montserrat alternates', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      fontSize: {
        'display-1-mobile': '65px',
        'display-1-desktop': '140px',
        'display-2-mobile': '60px',
        'display-2-desktop': '125px',
        'display-3-mobile': '50px',
        'display-3-desktop': '100px',
        'large-1-mobile': '48px',
        'large-1-desktop': '55px',
        'large-2-mobile': '40px',
        'large-2-desktop': '50px',
        'large-3-mobile': '35px',
        'large-3-desktop': '45px',
        'large-4-mobile': '30px',
        'large-4-desktop': '40px',
        'large-5-mobile': '25px',
        'large-5-desktop': '35px',
        'h1-mobile': '35px',
        'h1-desktop': '40px',
        'h2-mobile': '31px',
        'h2-desktop': '34px',
        'h3-mobile': '28px',
        'h3-desktop': '32px',
        'h4-mobile': '25px',
        'h4-desktop': '30px',
        'h5-mobile': '18px',
        'h5-desktop': '28px',
        'subheading-1-mobile': '19px',
        'subheading-1-desktop': '22px',
        'subheading-2-mobile': '16px',
        'subheading-2-desktop': '20px',
        'subheading-3-mobile': '14px',
        'subheading-3-desktop': '18px',
        'subheading-4-mobile': '12px',
        'subheading-4-desktop': '16px',
        'subheading-5-mobile': '10px',
        'subheading-5-desktop': '14px',
        'p1-mobile': '14px',
        'p1-desktop': '18px',
        'p2-mobile': '12px',
        'p2-desktop': '16px',
        'p3-mobile': '10px',
        'p3-desktop': '14px',
        'p4-mobile': '8px',
        'p4-desktop': '12px',
        'p5-mobile': '7px',
        'p5-desktop': '10px',
      },
      colors: {
        'zinc-900': '#18181B',
        'primary-100': '#AAEEFA',
        'primary-200': '#61D1E5',
        'primary-400': '#57BBCD',
        'primary-600': '#368593',
        'primary-700': '#164C56',
        'primary-800': '#16353B',
        'primary-900': '#081000',
        'secondary-100': '#EEEEDA',
        'secondary-200': '#D7D4B5',
        'secondary-400': '#AEAA81',
        'secondary-600': '#8C864B',
        'secondary-800': '#595530',
        'neutral-50': '#FAFAFA',
        'neutral-100': '#F5F5F5',
        'neutral-200': '#E5E5E5',
        'neutral-300': '#D4D4D4',
        'neutral-400': '#A3A3A3',
        'neutral-500': '#737373',
        'neutral-600': '#525252',
        'neutral-700': '#404040',
        'neutral-800': '#262626',
        'neutral-900': '#171717',
        'border': 'hsl(var(--border) / <alpha-value>)',
        'input': 'hsl(var(--input) / <alpha-value>)',
        'ring': 'hsl(var(--ring) / <alpha-value>)',
      },
      boxShadow: {
        'primary-600': '16px 16px 0 0 #368593',
        'primary-600-hover': '20px 20px 0 0 #368593',
        'primary-mobile-600': '0px 0px 15px 5px #368593',
        'primary-mobile-600-hover': '0px 0px 20px 8px #368593',
        'primary-200': '16px 16px 0 0 #61D1E5',
        'primary-200-hover': '20px 20px 0 0 #61D1E5',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      lineHeight: {
        heading: '1.2',
        subheading: '1.4',
        p: '1.6',
      },
    },
    variants: {
      extend: {
        fontSize: ['responsive'],
      },
    },
  },
}

export default config
