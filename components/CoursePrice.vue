<template>
  <section class="py-20 px-14 sp:py-10 sp:px-1">
    <div class="mx-auto tab:w-11/12">
      <h2 class="text-3xl font-bold text-center">料金プラン</h2>
      <p class="mt-2 text-center sp:text-left"><span class="font-bold">整体+部分オイル</span>、<span class="font-bold">全身オイル</span>、<span class="font-bold">全身整体</span>の3種類からコースを選んでいただけます。</p>
      <p class="mt-1 text-center sp:text-left">初回のご予約に限り、コース料金が<span class="font-bold text-red-400">半額</span>になります。</p>
      <ul>
        <li class="mt-14" v-for="course in courses" :key="course.name">
          <h3 class="text-center font-bold text-2xl text-blue-dark">{{ course.category }}</h3>
          <p class="text-center mt-2">{{ course.name }}</p>

          <ul class="flex overflow-x-auto gap-x-8 sp:gap-x-6 mt-6 justify-center sp:justify-start">
            <li class="border-2 border-gray-300 text-center rounded-lg pb-7 mt-8 min-w-max">
              <p class="px-10 sp:px-8 bg-gray-300 py-4 text-3xl text-white">60<span class="text-base">分</span></p>
              <p class="px-10 sp:px-8 mt-7 text-2xl">{{ course.price.time60.toLocaleString() }}<span class="text-base">円（税込）</span></p>
              <p class="px-10 sp:px-8 mt-10 md:mt-12 text-sm">初回ご利用のお客様</p>
              <p class="px-10 sp:px-8 mt-1 mb-10 md:mb-12 text-xl">{{ halfPrice(course.price.time60) }}<span class="text-base">円（税込）</span></p>
              <a class="py-3 mx-auto w-4/5 block bg-gray-300 border-2 border-gray-300 rounded-lg text-white hover:text-gray-300 hover:bg-white" href="https://lin.ee/zTsXoxq" @click="homeAddLine()" target="_blank">コースを予約する</a>
            </li>
            <li class="border-4 border-red-400 text-center rounded-lg pb-7 min-w-max">
              <p class="px-10 sp:px-8 bg-red-400 py-8 text-3xl text-white">90<span class="text-base">分</span></p>
              <p class="px-10 sp:px-8 mt-7 text-2xl">{{ course.price.time90.toLocaleString() }}<span class="text-base">円（税込）</span></p>
              <p class="px-10 sp:px-8 mt-10 md:mt-12 text-sm">初回ご利用のお客様</p>
              <p class="px-10 sp:px-8 mt-1 mb-10 md:mb-12 text-xl">{{ halfPrice(course.price.time90) }}<span class="text-base">円（税込）</span></p>
              <a class="py-3 mx-auto w-4/5 block bg-red-400 border-2 border-red-400 rounded-lg text-white hover:text-red-400 hover:bg-white" href="https://lin.ee/zTsXoxq" @click="homeAddLine()" target="_blank">コースを予約する</a>
            </li>
            <li class="border-2 border-gray-300 text-center rounded-lg pb-7 mt-8 min-w-max">
              <p class="px-10 sp:px-8 bg-gray-300 py-4 text-3xl text-white">120<span class="text-base">分</span></p>
              <p class="px-10 sp:px-8 mt-7 text-2xl">{{ course.price.time120.toLocaleString() }}<span class="text-base">円（税込）</span></p>
              <p class="px-10 sp:px-8 mt-10 md:mt-12 text-sm">初回ご利用のお客様</p>
              <p class="px-10 sp:px-8 mt-1 mb-10 md:mb-12 text-xl">{{ halfPrice(course.price.time120) }}<span class="text-base">円（税込）</span></p>
              <a class="py-3 mx-auto w-4/5 block bg-gray-300 border-2 border-gray-300 rounded-lg text-white hover:text-gray-300 hover:bg-white" href="https://lin.ee/zTsXoxq" @click="homeAddLine()" target="_blank">コースを予約する</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { courseList } from '@/mixins/course-list'

export default {
  mixins: [ courseList ],
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