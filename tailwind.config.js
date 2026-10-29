/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class', // lets you toggle light/dark manually
  theme: {
    extend: {
      colors: {
        primary: '#840227',
        brand: '#840227',
        'brand-hover': '#F2B6A0',
        surface: '#FAFAF8',
        'surface-dark': '#1E293B',
        'surface-primary-dark': '#0F172A',
        background: '#FFFFFF',
        'background-dark': '#1E293B',
        'secondary-surface': '#F2F2EE',
        'table-header': '#F1F3F5',
        'menu-header': '#F8F9FA',
        logo: '#D9D9D9',
        pagination: '#EDEEEF',
      },
      textColor: {
        main: '#2A2A2A',
        'main-dark': '#FAFAF8',
        muted: '#4D4D4D',
        'muted-dark': '#BBBFC4',
      },
      backgroundColor: {
        muted: '#F2F2EE',
      },
      borderColor: {
        default: '#E2E4E7',
        'input-border': '#2A2A2A',
      },
      spacing: {
        input: 48, // replaces --input-height, adjust as needed -> h-input
        'sidebar-sm': 356, // 22.25rem
        'sidebar-lg': 600, // 37.5rem
      },
      // clamp() isn't supported in RN, so these are the mobile (minimum) values
      fontSize: {
        h0: ['32px', { lineHeight: '42px', fontWeight: '600' }],
        h1: ['26px', { lineHeight: '36px', fontWeight: '600' }],
        h2: ['22px', { lineHeight: '30px', fontWeight: '600' }],
        h3: ['18px', { lineHeight: '26px', fontWeight: '600' }],
        h4: ['16px', { lineHeight: '24px', fontWeight: '600' }],
        h45: ['14px', { lineHeight: '20px', fontWeight: '600' }],
        h5: ['13px', { lineHeight: '20px', fontWeight: '600' }],
        preview: ['15px', { lineHeight: '28px', fontWeight: '600' }],
        ll: ['15px', { lineHeight: '24px' }],
        large: ['14px', { lineHeight: '22px' }],
        body: ['14px', { lineHeight: '22px' }],
        emphasis: ['11px', { lineHeight: '20px' }],
        caption: ['10px', { lineHeight: '16px' }],
        small: ['10px', { lineHeight: '14px', fontWeight: '500' }],
      },
      fontFamily: {
        poppins: ['Poppins-Regular'],
        'poppins-medium': ['Poppins-Medium'],
        'poppins-semibold': ['Poppins-SemiBold'],
      },
    },
  },
  plugins: [],
};
