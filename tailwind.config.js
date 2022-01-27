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
        }
      },
      width: {
        '11/50': '22%',
        '12/25': '48%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
