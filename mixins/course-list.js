export const courseList = {
  data() {
    return {
      courses: [
        {
          name: 'ウィメンズ整体®︎（サクラムバランス®︎）コース',
          description: 'なんとなく不調が続いている',
          price: {
            time60: 10220,
            time90: 14780,
            time120: 19340
          }  
        },
        {
          name: '手足の巡りオイル整体コース',
          description: '手足の冷えが気になる',
          price: {
            time100: 17300,
            time120: 20340
          }
        },
        {
          name: '首肩徹底整体コース',
          description: 'とにかく肩がつらい',
          price: {
            time100: 17300,
            time120: 20340
          }
        },
        {
          name: '美姿勢サポート整体コース',
          description: '猫背が気になる',
          price: {
            time60: 10220,
            time90: 14780,
            time120: 19340
          }
        },
        {
          name: '産後骨盤整体コース',
          description: '産後の心身の変化で悩んでいる',
          price: {
            time60: 10220,
            time90: 14780,
            time120: 19340
          }
        },
        {
          name: '更年期ゆらぎ整体コース',
          description: 'お顔のほてりや眠りが浅い',
          price: {
            time90: 16330,
            time120: 20890
          }
        },
        {
          name: 'マタニティケア整体コース',
          description: '妊娠中の心身をケアしたい',
          price: {
            time60: 10220
          }
        }
      ]
    }
  },
  methods: {
    halfPrice: (price) => {
      const halfPrice = price / 2;
      return halfPrice.toLocaleString();
    }
  }
}