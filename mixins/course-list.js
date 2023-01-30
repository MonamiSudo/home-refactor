export const courseList = {
  data() {
    return {
      courses: [
        {
          name: 'ぐっすり快眠整体コース',
          description: '',
          price: {
            time60: 9020,
            time90: 12980,
            time120: 16940
          }  
        },
        {
          name: '美容整体コース',
          description: '',
          price: {
            time60: 9020,
            time90: 12980,
            time120: 16940
          }
        },
        {
          name: 'リモートワーク疲れ整体コース',
          description: '',
          price: {
            time60: 9020,
            time90: 12980,
            time120: 16940
          }
        },
        {
          name: '産後骨盤矯正コース',
          description: '',
          price: {
            time60: 9020,
            time90: 12980,
            time120: 16940
          }
        },
        {
          name: '整体師の行う、全身オイルコース',
          description: '',
          price: {
            time60: 11660,
            time90: 16940,
            time120: 22220
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