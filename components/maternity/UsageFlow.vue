<template>
  <section class="bg-red-100 py-20 px-14 sp:py-10 sp:px-1">
    <div class="mx-auto max-w-6xl tab:w-11/12">
      <h2 class="text-3xl font-bold text-center">ご利用の流れ</h2>
      <ul class="mt-12 flex flex-col gap-y-8">
        <li class="flex justify-around sp:flex-wrap" v-for="item in items" :key="item.id">
          <figure class="w-5/12 sp:w-full">
            <img class="rounded-lg" :src="item.image" :alt="item.alt" v-lazy-load>
          </figure>
          <div class="bg-white rounded-lg p-8 w-1/2 sp:w-full sp:py-7 sp:px-4">
            <p class="text-xl font-bold">ステップ {{ item.id }}</p>
            <p class="text-red-300 font-bold text-2xl mt-2">{{ item.heading }}</p>
            <p class="mt-2" v-html="item.text"></p>
          </div>
        </li>
      </ul>
    </div> 
  </section> 
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, image: require('@/assets/image/usage-flow/flow1.jpg?ver2'), alt: 'LINEからコースを予約している', heading: 'LINEから予約', text: 'パウワウホームの<a class="line-maternity text-green-500 underline" href="https://line.me/ti/p/%40691zdiyo" @click="homeAddLine()">公式LINE</a>を友達追加して、ご予約していただくことができます。'},
        // アプリheading：アプリから予約
        // アプリテキスト：iPhoneをお使いの方は<a class="text-blue-dark underline" href="https://apps.apple.com/jp/app/qohs-home/id1483571890">App Store</a>から、iPhone以外のスマホをお使いの方は<a class="text-blue-dark underline" href="https://play.google.com/store/apps/details?id=me.qohs.qohsapp">Google Play</a>から、アプリをダウンロードしてください。
        { id: 2, image: require('@/assets/image/usage-flow/flow2.jpg?ver2'), alt: '予約を受けセラピストが出張している', heading: '整体師がご自宅へ訪問', text: '整体師がご予約いただいた時間の約5分前にご自宅へお伺いします。「インターホンを鳴らす前に連絡が欲しい」などのご要望がございましたらお申し付け下さい。'},
        { id: 3, image: require('@/assets/image/usage-flow/flow3.jpg?ver2'), alt: '施術をするための準備をしている', heading: '施術の準備', text: '施術者がお客様のご自宅へお伺いし、施術の準備をいたします。整体師がヨガマットをお持ちいたしますので、お客様にご用意いただくのは、1メートル×2メートルのスペースのみです。<br>※ ご自宅のベッドで施術をすることもできます'},
        { id: 4, image: require('@/assets/image/maternity/usageFlow/flow4.jpeg?ver2'), alt: 'お客様の家でセラピストが施術をしている', heading: 'カウンセリング・施術', text: '横向き・仰向けでなるべくお腹に負担がかからないように、施術を行います。<br>体勢やお腹のつらさ等、相談しながら施術を進めていきます。はじめにカウンセリングを行い、お客様の悩みに寄り添った施術をご提供し、施術後には体の専門家から見た体の状態をお伝えいたします。'},
      ]
    }
  },
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

