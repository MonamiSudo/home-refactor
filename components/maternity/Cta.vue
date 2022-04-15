<template>
  <section>
    <div class="bg-blue-dark py-14">
      <picture>
        <source srcset="@/assets/image/maternity/cta/course-sp.png" :media="picture.sp">
        <img class="mx-auto" src="@/assets/image/maternity/cta/course-pc.png" alt="" v-lazy-load>
      </picture>
      <div class="text-center mt-14 sp:mt-6">
        <a href="https://lin.ee/zTsXoxq" @click="homeAddLine()" class="line-maternity inline-block" target="_blank">
          <img class="mx-auto hover:cursor-pointer" src="@/assets/image/maternity/cta/line-add.png" alt="" v-lazy-load>
        </a>
      </div>
    </div>
    <div>
      <div class="p-cta__bg py-4 px-14 text-white sp:px-4">
        <p class="p-cta__caution-text">※ 電話でもご予約いただけます　<br class="sp"><a class="text-xl border-b-2" href="tel:090-7999-5882">090-7999-5882</a>（担当：赤木）</p>
        <p class="p-cta__caution-text py-2">※ 出張対応地域<br>東京都全域、神奈川（川崎市、横浜市）、埼玉（所沢・浦和・越谷より東京に近い場所）、千葉（松戸・津田沼より東京に近い場所）今後、随時拡大予定です。</p>
      </div>
    </div>
  </section>
</template>

<script>
import { breakpoints } from '../../mixins/break-points'
export default {
  mixins: [
    breakpoints
  ],
  methods: {
    // @nuxtjs/google-analytics
    homeAddLine() {
      this.$ga.event({
        eventCategory: 'LINE',
        eventAction: 'click',
        eventLabel: 'line_maternity'
      })
    },
  }
}
</script>

<style scoped lang="scss">
  .p-cta {
    &__bg {
      background-color: rgba(105, 173, 180, 0.5);
    }
  }
</style>