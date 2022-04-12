module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      pc: {'max': '1024px'}, // 下に記述したプロパティのほうが優先して適用される。
      tab: {'max': '769px'},
      sp: {'max': '559px'}
    },
    extend: {
      fontSize: {
        sp: '15px'
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
