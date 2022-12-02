module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      pc: {'max': '1024px'}, // 下に記述したプロパティのほうが優先して適用される。
      tab: {'max': '769px'},
      sp: {'max': '559px'}
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem', // 16px
      'lg': '1.125rem', // 18px
      'xl': '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.75rem', // 28px 
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      fontSize: {
        sp: '15px',
      },
      colors: {
        blue: {
          dark: '#69adb4',
          thin: '#E1F2F0'
        },
        red: {
          dark: '#CA495A',
          thin: '#F79EAA'
        },
        green: {
          line: '#8FC40A'
        }
      },
      width: {
        '11/50': '22%',
        '3/10': '30%',
        '12/25': '48%',
        '43/50': '86%',
        '24/25': '96%',
        '500': '500px'
      },
      fontSize: {
        'sp-base': '15px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
