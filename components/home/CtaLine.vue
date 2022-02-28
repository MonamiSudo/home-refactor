<template>
  <section class="p-cta">
    <div class="w-full p-14 sp:py-10 sp:px-1">
      <div class="mx-auto max-w-6xl tab:w-11/12">
        <div class="text-center text-white">
          <h2 class="text-2xl font-bold tracking-widest sp:text-xl">【期間限定：3月31日まで】<br><span class="text-green-line text-4xl">LINE</span>から初めてのご予約で<br class="hidden sp:block">施術料金が<span class="text-4xl text-yellow-500">50%OFF!</span></h2>
        </div>
        <div class="mt-14">
          <p class="text-white text-center text-2xl font-bold mb-6">友達追加して今すぐ予約する！</p>
          <a class="line w-max mx-auto block h-24" href="https://lin.ee/zTsXoxq" @click="homeAddLine()">
            <img class="h-full mx-auto" src="@/assets/image/cta-area/line-btn.png" alt="">
          </a>
        </div>
      </div>
    </div> 
    <div>
      <div class="p-cta__bg py-4 px-14 text-white sp:px-4">
        <p class="p-cta__caution-text">※ 電話でもご予約いただけます　<br class="sp"><a class="text-xl border-b-2" href="tel:090-7999-5882">090-7999-5882</a>（担当：赤木）</p>
        <p class="p-cta__caution-text py-2">※ Google Playでインストールするには、Androidのバージョンが11以上の必要があります。Android10以前をご利用のお客様は、バージョンアップをお願いいたします。</p>
        <p class="p-cta__caution-text py-2">※ 出張対応地域<br>東京都全域、神奈川（川崎市、横浜市）、埼玉（所沢・浦和・越谷より東京に近い場所）、千葉（松戸・津田沼より東京に近い場所）今後、随時拡大予定です。</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    homeAddLine() {
      this.$ga.event({
        eventCategory: 'LINE',
        eventAction: 'click',
        eventLabel: 'line_home'
      })
    },
  }
}
</script>

<style scoped lang="scss">
  .p-cta {
    background-image: url('@/assets/image/cta-area/cta-background.png');
    background-size: cover;
    background-color: rgba(255, 255, 255);
    &__bg {
      background-color: rgba(105, 173, 180, 0.5);
    }
  }
</style>