<template>
  <section class="p-cta">
    <div class="p-cta__bg py-14">
      <!-- <picture>
        <source srcset="@/assets/image/maternity/cta/course-sp-630.png" :media="picture.sp">
        <img class="mx-auto" src="@/assets/image/maternity/cta/course-pc-630.png" alt="" v-lazy-load>
      </picture> -->
      <picture>
        <source srcset="@/assets/image/maternity/cta/240425-maternity-cta-sp.webp" media="(max-width:768px)" type="image/webp" />
        <source srcset="@/assets/image/maternity/cta/240425-maternity-cta-sp.jpg" media="(max-width:768px)" />
        <source srcset="@/assets/image/maternity/cta/240425-maternity-cta-pc.webp" type="image/webp" />
        <img class="mx-auto" src="@/assets/image/maternity/cta/240425-maternity-cta-pc.jpg" alt="sp.jpg" />
      </picture>
      <div class="text-center mt-14 sp:mt-6">
        <a href="https://line.me/ti/p/%40691zdiyo" @click="homeAddLine()" class="line-maternity inline-block" target="_blank">
          <img class="mx-auto hover:cursor-pointer" src="@/assets/image/maternity/cta/line-add.png" alt="" v-lazy-load>
        </a>
      </div>
      <!-- <div class="max-w-4xl mx-auto tab:w-11/12">
        <p class="font-bold tracking-wider leading-loose">
          ※ 下記に該当する方は、施術を受けられません。
          <br>・施術対象期間外（安定期【妊娠16週目から妊娠27週目】以外）の方
          <br>・妊娠経過が不安定な方
          <br>・切迫早産/流産の診断を受けた方
          <br>・お医者様より何か特別な診断を受けた方
          <br>・お医者様より安静を勧められた方
        </p>
      </div> -->
    </div>
    <!-- <div class="p-cta__bg py-10 px-14 sp:px-4"> -->
    <div class="bg-gray-100 py-10 px-14 sp:px-4">
      <ul class="max-w-xl mx-auto">
        <li class="text-center font-bold text-2xl sp:text-xl">ご確認事項</li>
        <li class="mt-6">
          <p class="font-bold">※ 下記に該当する方は、安全面の考慮から施術をお断りしています。</p>
          <ul class="mt-1 leading-relaxed">
            <li class="py-1 pl-5 sp:pl-0">① 施術対象期間外（安定期【妊娠16週目から妊娠27週目】以外）の方</li>
            <li class="py-1 pl-5 sp:pl-0">② 妊娠経過が不安定な方</li>
            <li class="py-1 pl-5 sp:pl-0">③ 切迫早産/流産の診断を受けた方</li>
            <li class="py-1 pl-5 sp:pl-0">④ お医者様より何か特別な診断を受けた方</li>
            <li class="py-1 pl-5 sp:pl-0">⑤ お医者様より安静を勧められた方</li>
          </ul>
        </li>
        <li class="mt-6">
          <p class="p-cta__caution-text font-bold">※ 出張可能エリアは東京都23区になります</p>
        </li>
      </ul>
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
      // background-color: rgba(105, 173, 180, 0.5);
      background-color: #ccd8d6;
    }
  }
</style>