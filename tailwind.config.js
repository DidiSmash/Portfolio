/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,vue,html}'],
  prefix: 'tw-',
  theme: {
    /* Responsive Breakpoint */
    screens: {
      xs: { max: '599.99px' },
      sm: { min: '600px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      md: { min: '1024px' }, // Tablet (matches max: iPad Pro @ 1112px).
      lg: { min: '1440px' }, // Desktop smallest.
      xl: { min: '1920px' } // Desktop wide.
    },
    extend: {
      maxWidth: {
        container: '70rem',
        sm: '344px',
        md: '50rem',
        lg: '60rem'
      },
      width: {
        22: '5.5rem',
        container: '70rem',
        38: '9.5rem',
        47: '11.75rem',
        52.5: '13.125rem',
        100: '25rem'
      },
      height: {
        38: '9.5rem',
        47: '11.75rem',
        52.5: '13.125rem',
        100: '25rem'
      },
      borderWidth: {
        6: '6px'
      },
      colors: {
        primary: 'rgb(var(--tw-primary) / <alpha-value>)',
        secondary: 'rgb(var(--tw-secondary) / <alpha-value>)',
        thirdly: 'rgb(var(--tw-thirdly) / <alpha-value>)',
        'danger-bandeau': 'rgb(var(--tw-danger-bandeau) / <alpha-value>)',
        'danger-bandeau-icon': 'rgb(var(--tw-danger-bandeau-icon) / <alpha-value>)',
        'info-bandeau': 'rgb(var(--tw-info-bandeau) / <alpha-value>)',
        'success-bandeau': 'rgb(var(--tw-success-bandeau) / <alpha-value>)',
        'warning-bandeau': 'rgb(var(--tw-warning-bandeau) / <alpha-value>)',
        grey1: 'rgb(var(--tw-grey1) / <alpha-value>)',
        grey2: 'rgb(var(--tw-grey2) / <alpha-value>)',
        grey4: 'rgb(var(--tw-grey4) / <alpha-value>)'
      },
      borderRadius: {
        corner: '3.5rem',
        'corner-mobile': '5rem',
        card: '40px 0 40px 0',
        'card-mobile': '20px 0 20px 0',
        '2.5xl': '20px',
        '4xl': '40px'
      },
      fontSize: {
        '2xs': [
          '0.625rem',
          { lineHeight: '0.8rem' }
        ],
        '2.5xl': [
          '1.75rem', {
            lineHeight: '2rem'
          }
        ],
        '4.5xl': [
          '2.625rem', {
            lineHeight: '2rem'
          }
        ],
        h1: [
          '3rem', {
            lineHeight: '2.86rem'
          }
        ],
        h2: [
          '2.26rem', {
            lineHeight: '2.66rem'
          }
        ],
        h3: [
          '1.86rem', {
            lineHeight: '2.13rem'
          }
        ],
        h4: [
          '1.53rem', {
            lineHeight: '1.86rem'
          }
        ]
      }
    }
  },
  plugins: []
}
