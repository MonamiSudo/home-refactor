
<template>
  <div class="p-fv text-blue-dark pt-14 pr-12 pl-24 relative">
    <div class="h-full flex justify-between">
      <div class="absolute z-10">
        <p class="p-fv__brand-name">QOHS HOME</p>
        <p class="p-fv__catchcopy mt-36 mb-24">お腹に赤ちゃんがいる方へ</p>
        <h1 class="p-fv__title">ママのための<br>出張整体</h1>
        <!-- <h1 class="text-9xl absolute">ママ</h1> -->
      </div>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(image, index) in images" :key="index">
          <img class="w-full h-full" :src="image.link" alt="">
        </swiper-slide>

        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
      </swiper>
      
    </div>  
  </div>
</template>

<script>
export default {
    data () {
      return {
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
        images: [
          { link: require('@/assets/image/maternity/first-view-pc/fv_pc-1-new.png') },
          { link: require('@/assets/image/maternity/first-view-pc/fv_pc-2-new.png') },
          { link: require('@/assets/image/maternity/first-view-pc/fv_pc-3-new.png') },
          { link: require('@/assets/image/maternity/first-view-pc/fv_pc-4-new.png') },
        ]
      }
    }
}
</script>

<style scoped lang="scss">
  .p-fv {
    height: 82vh;
    &::after {
        content: '';
        display: block;
        background-image: url('@/assets/image/maternity/first-view-pc/off50-pc.png');
        background-size: cover;
        height: 280px;
        width: 280px;
        position: absolute;
        bottom: -130px;
        right: 48px;
        z-index: 10;
      }
    &__brand-name {
      font-size: 20px;
      // font-size: 1.3888888888888888vw;
      letter-spacing: .1em;
      line-height: 1.225;
      text-shadow: 2px 4px 8px #fff;
    }
    &__catchcopy {
      font-size: 42px;
      // font-size: 2.9166666666666665vw;
      letter-spacing: .15em;
      line-height: 1.75;
      text-shadow: 2px 4px 8px #fff;
    }
    &__title {
      // 基準ウインドウサイズが1440px
      font-size: 106px; // px表記
      // font-size: 7.36111vw; // ve表記
      letter-spacing: .15em;
      line-break: 1.32;
      text-shadow: 2px 4px 8px #fff;
    }
  }
  .swiper {
    height: 100%;
    // width: 720px;
    width: 56%;

    height: 84vh;
    width: 52%;
    position: absolute;
    right: 50px;
    & * {
      width: 100%;
    }
    &-wrapper {
      transition-duration: 3000ms;
      transition-timing-function: ease;
    }
    &-container {
      margin-right: 0;
    }
  }
</style>

