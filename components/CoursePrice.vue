<template>
  <section class="py-20 px-14 sp:py-10 sp:px-1">
    <div class="mx-auto max-w-6xl tab:w-11/12">
      <h2 class="text-3xl font-bold text-center">料金プラン</h2>
      <p class="text-center mt-1">ご好評につき、初回予約に限り<span class="text-base text-red-400 font-bold">全コース50%オフ</span>キャンペーン実施中！</p>
      <p class="text-center mt-1">コース価格はすべて税込表示です。</p>
      <ul class="flex flex-col items-center">
        <li class="mt-14" v-for="course in courses" :key="course.name">
          <p class="text-center">＼{{ course.description }}／</p>
          <h3 class="text-center text-2xl mb-2 sp:text-xl">{{ course.name }}</h3>
          <table class="mx-auto text-xl text-center">
            <tbody>
              <!-- コース料金 -->
              <tr>
                <th></th>
                <th class="bg-red-300 text-white border-2 border-gray-600 font-normal px-10 py-3 sp:py-3 sp:px-5 sp:text-base">通常料金</th>
                <th class="bg-red-300 text-white border-2 border-gray-600 font-normal px-10 py-3 sp:py-3 sp:px-5 sp:text-base">LINE初回<br class="hidden sp:block">予約料金</th>
              </tr>
              <!-- 60分コース -->
              <tr v-if="course.price.time60">
                <td class="border-2 border-gray-600 px-10 py-3 sp:py-3 sp:px-5 sp:text-base">60分</td>
                <td class="border-2 border-gray-600 px-10 py-3 sp:py-3 sp:px-5 sp:text-base">{{ course.price.time60.toLocaleString() }}<span class="text-base sp:text-sm">円</span></td>
                <td class="border-2 border-gray-600 px-10 py-3 sp:py-3 sp:px-5 sp:text-lg text-red-500 text-2xl">{{ halfPrice(course.price.time60) }}<span class="text-base sp:text-sm">円</span></td>
              </tr>
              <!-- 90分コース -->
              <tr v-if="course.price.time90">
                <td class="border-2 border-gray-600 px-10 py-3 sp:py-3 sp:px-5 sp:text-base">90分</td>
                <td class="border-2 border-gray-600 px-10 py-3 sp:py-3 sp:px-5 sp:text-base">{{ course.price.time90.toLocaleString() }}<span class="text-base sp:text-sm">円</span></td>
                <td class="border-2 border-gray-600 px-10 py-3 sp:py-3 sp:px-5 sp:text-lg text-red-500 text-2xl">{{ halfPrice(course.price.time90) }}<span class="text-base sp:text-sm">円</span></td>
              </tr>
              <!-- 100分コース -->
              <tr v-if="course.price.time100">
                <td class="border-2 border-gray-600 px-10 py-3 sp:py-3 sp:px-5 sp:text-base">100分</td>
                <td class="border-2 border-gray-600 px-10 py-3 sp:py-3 sp:px-5 sp:text-base">{{ course.price.time100.toLocaleString() }}<span class="text-base sp:text-sm">円</span></td>
                <td class="border-2 border-gray-600 px-10 py-3 sp:py-3 sp:px-5 sp:text-lg text-red-500 text-2xl">{{ halfPrice(course.price.time100) }}<span class="text-base sp:text-sm">円</span></td>
              </tr>
              <!-- 120分コース -->
              <tr v-if="course.price.time120">
                <td class="border-2 border-gray-600 px-10 py-3 sp:py-3 sp:px-5 sp:text-base">120分</td>
                <td class="border-2 border-gray-600 px-10 py-3 sp:py-3 sp:px-5 sp:text-base">{{ course.price.time120.toLocaleString() }}<span class="text-base sp:text-sm">円</span></td>
                <td class="border-2 border-gray-600 px-10 py-3 sp:py-3 sp:px-5 sp:text-lg text-red-500 text-2xl">{{ halfPrice(course.price.time120) }}<span class="text-base sp:text-sm">円</span></td>
              </tr>
            </tbody>
          </table>
          <p class="mt-1 text-right text-sm">※サービス料（交通費など）1,100円を含む</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { courseList } from '@/mixins/course-list'

export default {
  mixins: [ courseList ],
}
</script>

<style lang="scss" scoped>
  .btn-90::before {
    content: '＼ おすすめ ／';
    display: block;
    font-size: 13px;
    color: #f87171;
    position: absolute;
    top: -20px;
    margin-left: -42.705px;
    left: 50%;
  }
</style>