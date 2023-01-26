export const courseList = {
  data() {
    return {
      courses: [
        {
          category: '整体＋部分オイル',
          name: '産後骨盤矯正コース/美容整体コース/快眠整体コース＋首肩or足の部分オイル',
          description: '',
          price: {
            time60: 9900,
            time90: 14300,
            time120: 18700
          }
        },
        {
          category: '全身オイル',
          name: '整体師の行う、全身オイルコース',
          description: '',
          price: {
            time60: 11660,
            time90: 16940,
            time120: 22220
          }
        },
        {
          category: '全身整体',
          name: '産後骨盤矯正コース/マタニティーコース/美容整体コース/快眠整体コース',
          description: '',
          price: {
            time60: 9020,
            time90: 12980,
            time120: 16940
          }  
        },
        // {
        //   name: '美容整体コース',
        //   description: '',
        //   price: {
        //     time60: 9020,
        //     time90: 12980,
        //     time120: 16940
        //   }
        // },
        // {
        //   name: 'リモートワーク疲れ整体コース',
        //   description: '',
        //   price: {
        //     time60: 9020,
        //     time90: 12980,
        //     time120: 16940
        //   }
        // },
        // {
        //   name: '産後骨盤矯正コース',
        //   description: '',
        //   price: {
        //     time60: 9020,
        //     time90: 12980,
        //     time120: 16940
        //   }
        // },
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