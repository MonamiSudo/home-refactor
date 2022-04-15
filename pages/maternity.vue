<!-- マタニティ専用のwebページ -->
<template>
  <main>
    <maternityFirstView />
    <maternityCta />
    <maternityAbout />
    <maternityUserTheme />
    <maternityUserAnswer1 />
    <maternityUserAnswer2 />
    <CustomerVoice />
    <maternityCta />
    <StoreAchivement />
    <maternityBeforeAfter />
    <StaffList />
    <CoronaMeasure />
    <maternityUsageFlow />
    <maternityCoursePrice />
    <maternityCta />
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
  head() {
    return {
      title: this.title
    }
  },
  layout: 'footerMaternity' // マタニティ用のレイアウトを読み込み
}
</script>