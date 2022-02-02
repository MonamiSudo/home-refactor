<template>
  <section class="py-20 px-14 sp:py-10 sp:px-1">
    <div class="mx-auto max-w-6xl tab:w-11/12">
      <h2 class="text-3xl font-bold text-center">料金プラン</h2>
      <p class="text-center mt-1"><span class="text-base text-red-400 font-bold">2022年3月31日まで、アプリから初回予約で全コース半額キャンペーン</span>を行なっています。</p>
      <ul>
        <li class="mt-14" v-for="course in courses" :key="course.name">
          <h3 class="text-center text-2xl mb-2 sp:text-xl">{{ course.name }}</h3>
          <table class="mx-auto text-xl text-center">
            <tbody>
              <!-- 1行目 -->
              <tr>
                <th></th>
                <th class="bg-blue-dark text-white border-2 border-gray-600 font-normal px-10 py-3 sp:py-3 sp:px-5 sp:text-base">通常料金</th>
                <th class="bg-blue-dark text-white border-2 border-gray-600 font-normal px-10 py-3 sp:py-3 sp:px-5 sp:text-base">アプリ初回<br class="hidden sp:block">予約料金</th>
              </tr>
              <!-- 2行目 -->
              <tr>
                <td class="border-2 border-gray-600 px-10 py-3 sp:py-3 sp:px-5 sp:text-base">60分</td>
                <td class="border-2 border-gray-600 px-10 py-3 sp:py-3 sp:px-5 sp:text-base">{{ course.price.time60.toLocaleString() }}<span class="text-base sp:text-sm">円</span></td>
                <td class="border-2 border-gray-600 px-10 py-3 sp:py-3 sp:px-5 sp:text-lg text-red-500 text-2xl">{{ halfPrice(course.price.time60) }}<span class="text-base sp:text-sm">円</span></td>
              </tr>
              <!-- 3行目 -->
              <tr>
                <td class="border-2 border-gray-600 px-10 py-3 sp:py-3 sp:px-5 sp:text-base">90分</td>
                <td class="border-2 border-gray-600 px-10 py-3 sp:py-3 sp:px-5 sp:text-base">{{ course.price.time90.toLocaleString() }}<span class="text-base sp:text-sm">円</span></td>
                <td class="border-2 border-gray-600 px-10 py-3 sp:py-3 sp:px-5 sp:text-lg text-red-500 text-2xl">{{ halfPrice(course.price.time90) }}<span class="text-base sp:text-sm">円</span></td>
              </tr>
              <!-- 4行目 -->
              <tr>
                <td class="border-2 border-gray-600 px-10 py-3 sp:py-3 sp:px-5 sp:text-base">120分</td>
                <td class="border-2 border-gray-600 px-10 py-3 sp:py-3 sp:px-5 sp:text-base">{{ course.price.time120.toLocaleString() }}<span class="text-base sp:text-sm">円</span></td>
                <td class="border-2 border-gray-600 px-10 py-3 sp:py-3 sp:px-5 sp:text-lg text-red-500 text-2xl">{{ halfPrice(course.price.time120) }}<span class="text-base sp:text-sm">円</span></td>
              </tr>
            </tbody>
          </table>
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