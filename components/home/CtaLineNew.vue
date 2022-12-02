<template>
  <section class="bg-pink-100 py-14">
    <div class="max-w-4xl w-11/12 mx-auto">
      <div class="flex justify-evenly sp:flex-col">      
        <div class="p-ctalinenew__textarea">
          <p class="p-ctalinenew__logo hidden sp:block mx-auto">
            <img src="@/assets/image/logo/qohs-black.png" alt="QOHS">
          </p>
          <h2 class="p-ctalinenew__title text-3xl font-bold tab:text-2xl sp:mt-5">外出が難しくても安心！<br>ご自宅まで出張整体にうかがいます</h2>
          <p class="pt-8 font-bold leading-7">LINEから3ステップで簡単に予約をお取りいただけます。</p>
          <a class="line-sango block inline-block py-4 px-16 mt-10 rounded-lg bg-green-400 text-white text-xl border hover:text-green-400 hover:bg-white hover:border hover:border-green-400 tracking-wider font-bold duration-300 tab:py-4 tab:px-10 sp:hidden" @click="homeAddLine()" target="_blank" href="https://lin.ee/zTsXoxq">まずはLINE友達追加する</a>
        </div>
        <div class="p-ctalinenew__imgarea max-w-md">
          <picture class="p-ctalinenew__imgarea max-w-md">
            <img src="@/assets/image/cta-area/phone-pc.png" alt="出張整体の予約画面">
          </picture>
        </div>
      </div>
      <a class="line-sango hidden sp:block py-4 px-6 rounded-lg bg-green-400 text-white text-xl tracking-wider font-bold text-center mt-10 shadow-lg" href="https://lin.ee/zTsXoxq" @click="homeAddLine()" target="_blank">まずはLINE友達追加する</a>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    // @nuxtjs/google-analytics
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
.p-ctalinenew {

  &__textarea {
    width: 52%;

    @media screen and (max-width: 480px) {
      width: 100%;
    }
  }

  &__imgarea {
    width: 35%;

    @media screen and (max-width: 480px) {
      margin: 40px auto 0;
      width: 76%;
    }
  }

  &__logo {
    width: 120px;
  }

}

// @include mq(md) {
//   .p-ctalinenew {

//     &__textarea {
//       width: 100%;
//     }

//   }
// }
</style>