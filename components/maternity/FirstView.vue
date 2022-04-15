
<template>
  <section class="p-fv">
    <!-- Desktop -->
    <div v-if="$device.isDesktop" class="p-fv-pc text-blue-dark pt-14 pr-12 pl-24 mb-24">
      <div class="p-fv-pc__50off h-full flex justify-between relative">
        <div class="h-full absolute z-10">
          <p class="p-fv-pc__brand-name tab:text-lg">QOHS Home</p>
          <p class="p-fv-pc__catchcopy mt-36 mb-24 tab:text-xl">お腹に赤ちゃんがいる方へ</p>
          <h1 class="p-fv-pc__title tab:text-2xl">ママのための<br>出張整体</h1>
        </div>
        <client-only>
          <swiper class="swiperPC" :options="swiperOption">
            <swiper-slide v-for="(image, index) in imagesPC" :key="index">
              <img class="w-full h-full" :src="image.link" alt="" v-lazy-load>
            </swiper-slide>
          </swiper>
        </client-only>
      </div>
    </div>
    <!-- Tablet or Mobile -->
    <div v-if="$device.isMobileOrTablet" class="p-fv-sp mb-14">
      <figure>
        <img class="mx-auto" src="@/assets/image/maternity/first-view-sp/header-sp.png" alt="" v-lazy-load>
      </figure>
      <client-only>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="(image, index) in imagesMobile" :key="index">
            <img class="w-full h-full" :src="image.link" alt="" v-lazy-load>
          </swiper-slide>
        </swiper>
      </client-only >
      <div class="p-fv-sp__content">
        <h1 class="p-fv-sp__title text-blue-dark">ママのための<br>出張整体</h1>  
        <p class="p-fv-sp__brand-name font-bold text-blue-dark mt-10">QOHS Home</p>
      </div>
    </div>  
  </section>
</template>

<script>
export default {
  data () {
    return {
      // =========================================
      // swiper スライドショー設定
      // =========================================
      swiperOption: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: true
        },
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 5,
        loop: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
      },
      // =========================================
      // swiper スライドショー設定終わり
      // =========================================
      
      imagesPC: [ // PC swiper 画像
        { link: require('@/assets/image/maternity/first-view-pc/fv_pc-1-new.png') },
        { link: require('@/assets/image/maternity/first-view-pc/fv_pc-2-new.png') },
        { link: require('@/assets/image/maternity/first-view-pc/fv_pc-3-new.png') },
        { link: require('@/assets/image/maternity/first-view-pc/fv_pc-4-new.png') },
      ],
      imagesMobile: [ // Mobile swiper 画像
        { link: require('@/assets/image/maternity/first-view-sp/fv_sp-1.png') },
        { link: require('@/assets/image/maternity/first-view-sp/fv_sp-2.png') },
        { link: require('@/assets/image/maternity/first-view-sp/fv_sp-3.png') },
        { link: require('@/assets/image/maternity/first-view-sp/fv_sp-4.png') },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  // =================================================================================
  // PC
  // =================================================================================
  .p-fv-pc {
    height: 52vw;
    &__50off {
      &::after { // 50%offのバナー
        content: '';
        display: block;
        background-image: url('@/assets/image/maternity/first-view-pc/off50-pc.png');
        background-size: cover;
        height: 19.4vw;
        width: 19.4vw;
        position: absolute;
        bottom: -52px;
        right: 48px;
        z-index: 10;
      }
    }
    // 基準ウィンドウサイズ：1440px
    // vwでフォントサイズ設定
    &__brand-name {
      // font-size: 20px;
      font-size: 1.3888888888888888vw;
      letter-spacing: .1em;
      line-height: 1.225;
      text-shadow: 2px 4px 8px #fff;
    }
    &__catchcopy {
      // font-size: 42px;
      font-size: 2.9166666666666665vw;
      letter-spacing: .15em;
      line-height: 1.75;
      text-shadow: 2px 4px 8px #fff;
    }
    &__title {
      // font-size: 106px; // px表記
      font-size: 7.36111vw; // vw表記
      letter-spacing: .15em;
      line-break: 1.32;
      text-shadow: 2px 4px 8px #fff;
    }
  }
  // =================================================================================
  // Tablet or Mobile
  // =================================================================================
  .p-fv-sp {
    &__content {
      padding-left: 46px;
    }
    &__title {
      font-size: 30px;
      letter-spacing: .15em;
      line-height: 1.67;
    }
    &__brand-name {
      font-size: 35px;
      letter-spacing: .1em;
      line-height: 2;
    }
  }
  // =================================================================================
  // swiper plugin PC Settings
  // =================================================================================
  .swiperPC {
    height: 48.2vw;
    width: 54%;
    position: absolute; // absoluteでテキスト（キャッチコピー）と被せる
    right: 50px;
    & * {
      width: 100%;
    }
    &-container {
      margin-right: 0; // スライドショー右寄せにする
    }
  }
</style>

