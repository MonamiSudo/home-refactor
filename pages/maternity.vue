<!-- マタニティ専用のwebページ -->
<template>
  <main>
    <maternityFirstView />
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