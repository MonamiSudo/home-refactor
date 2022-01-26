<template>
  <section class="bg-gradient-to-r from-red-thin to-red-dark -mt-36 pt-36 pb-10">
    <h2 class="text-white text-3xl font-bold text-center mb-8">そのお悩み、クオースにお任せください！</h2>
    <ul class="flex justify-around bg-white mx-auto max-w-6xl p-10 rounded-lg tab:w-11/12 sp:flex-col sp:gap-y-8">
      <li class="w-3/12 sp:w-full" v-for="item in items" :key="item.id">
        <figure>
          <img class="rounded-lg" :src="item.image" :alt="item.alt">
        </figure>
        <h3 class="text-lg font-bold mt-4">{{ item.heading }}</h3>
        <p class="mt-1">{{ item.text }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {id: 1, heading: '子供がいても安心', text: '自宅の好きな場所で施術を受けられるので、子供のことを気にせずリラックスできます。', image: require('@/assets/image/user-answer/child-safe.jpg'), alt: '子供がいる部屋で施術をしている'},
        {id: 2, heading: 'セラピストは全員女性', text: '女性の体のスペシャリストが、あなたのお悩みに寄り添った施術をいたします。', image: require('@/assets/image/user-answer/staff-woman.jpg'), alt: '笑顔のパートナー'},
        {id: 3, heading: 'アプリで簡単予約', text: '予約をしたらおうちで受けるだけ。忙しい方でも、ちょっとした空き時間にご利用いただけます。', image: require('@/assets/image/user-answer/reserve.jpg'), alt: '女性がアプリから予約をしている'}
      ]
    }
  }
}
</script>