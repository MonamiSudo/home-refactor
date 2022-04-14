<!-- マタニティ専用のwebページ -->
<template>
  <main>
    <section v-if=" flag > 800 ">
      <maternityFirstViewPC />
    </section>
    <section v-else>
      <maternityFirstViewSP /> 
    </section>
    <maternityAbout />
    <maternityUserTheme />
    <maternityUserAnswer1 />
    <maternityUserAnswer2 />
    <CustomerVoice />
    <StoreAchivement />
    <maternityBeforeAfter />
    <StaffList />
    <CoronaMeasure />
    <maternityUsageFlow />
    <maternityCoursePrice />
  </main>
</template>

<script>
export default {
  data() {
    return {
      flag: 0, // ウインドウ幅 判定
      title: '妊娠16周目から受けられる出張整体｜クオースホーム'
    }
  },
  created() {
    if( process.browser ) { // windowオブジェクトを使うための回避方法
      const width = window.innerWidth; // ブラウザ幅
      this.flag = width; // フラグに幅を代入
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  layout: 'footerMaternity' // マタニティ用のレイアウトを読み込み
}
</script>