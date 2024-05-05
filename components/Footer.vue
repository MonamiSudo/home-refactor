<!-- 一般的な半額バナーを表示させるにはこのフッターコンポーネント -->
<template>
  <footer class="sp:mb-20">
    <div class="py-10 sp:py-14">
      <figure class="w-52 mx-auto">
        <img class="mx-auto" src="@/assets/image/footer/logo-powwow.png" alt="パウワウのロゴ">
      </figure>
    </div>
    <small class="inline-block bg-white w-full py-1 text-center">©︎ 2021 SMILE CREATE GROUP Co., Ltd</small>
    <a href="https://line.me/ti/p/%40691zdiyo" class="banner-half hidden sp:block">
      <!-- アプリ -->
      <!-- <img src="@/assets/image/footer/limited-banner2.png" alt="" @click="scrollToCta()"> -->
      <!-- LINEバナー -->
      <!-- <img src="@/assets/image/footer/line-banner.png" alt="" @click="homeAddLine()"> -->
      <!-- LINEバナー 背景黄色 -->
      <img src="@/assets/image/footer/banner-floating-sango.png" alt="" @click="homeAddLine()">
    </a>
  </footer>
</template>

<script>
export default {
  methods: {
    // ===============================================================================
    // バナー固定表示
    // ===============================================================================
    bannerToggleActive() { // 下にバナーを固定表示させる
      const target = document.querySelector('.banner-half'); // 表示させるバナー
      const scrollY = window.scrollY; // スクロール量（Y）
      const trigger = document.querySelector('.p-fv'); // 最初のエリア要素
      const triggerHeight = trigger.clientHeight; // 最初のエリアの高さ

      if( triggerHeight - scrollY < 0 ) // スクロール量が最初の高さを超えたらバナー表示
        target.classList.add('active');
      else
        target.classList.remove('active')
    },
    // ===============================================================================
    // GAでイベントを計測
    // ===============================================================================
    homeAddLine() {
      this.$ga.event({
        eventCategory: 'LINE',
        eventAction: 'click',
        eventLabel: 'line_home'
      })
    },
    // ===============================================================================
    // アプリの時に発火させる関数
    // ===============================================================================
    scrollToCta() { // バナークリック時にCTAまでスクロール
      const target = document.querySelector('.p-cta'); // CTAエリア取得
      const targetRect = target.getBoundingClientRect(); // CTAエリアのブラウザからの相対位置
      const destination = targetRect.top + window.pageYOffset; // CTAエリアのブラウザからの絶対位置（ゴール）
      window.scrollTo({ // スクロール関数
        top: destination,
        left: 0,
        behavior: 'smooth'
      });
      // ↓ GA計測
      this.$ga.event({
        eventCategory: 'banner',
        eventAction: 'click',
        eventLabel: 'footer_50off'
      })
    }
  },
  mounted() {
    window.addEventListener('scroll', this.bannerToggleActive); // スクロールによってバナーを表示or非表示
  }
}
</script>

<style scoped lang="scss">
  .banner-half {
    transition: all .5s;
    transform: translateY(81.55px);
    position: fixed;
    bottom: 0;
    &.active {
      transform: translateY(0);
    }
  }
</style>