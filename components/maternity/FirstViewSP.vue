<template>
  <div class="p-fv">
    <figure>
      <img src="@/assets/image/maternity/first-view-sp/header-sp.png" alt="">
    </figure>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img class="w-full h-full" :src="image.link" alt="">
      </swiper-slide>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
    <div class="p-fv__content">
      <h1 class="p-fv__title text-blue-dark">ママのための<br>出張整体</h1>  
      <p class="p-fv__brand-name font-bold text-blue-dark mt-10">QOHS HOME</p>
    </div>
    <!-- <p class="p-fv__catchcopy mt-36 mb-24">お腹に赤ちゃんがいる方へ</p> -->
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
  .p-fv {
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
</style>

