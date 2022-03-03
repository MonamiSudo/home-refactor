<template>
  <section class="bg-blue-thin py-20 px-14 sp:py-10 sp:px-1">
    <div class="mx-auto max-w-6xl tab:w-11/12">
      <h2 class="text-3xl font-bold text-center">ご利用の流れ</h2>
      <ul class="mt-12 flex flex-col gap-y-8">
        <li class="flex justify-around sp:flex-wrap" v-for="item in items" :key="item.id">
          <figure class="w-5/12 sp:w-full">
            <img class="rounded-lg" :src="item.image" :alt="item.alt">
          </figure>
          <div class="bg-white rounded-lg p-8 w-1/2 sp:w-full sp:py-7 sp:px-4">
            <p class="text-xl font-bold">ステップ {{ item.id }}</p>
            <p class="text-blue-dark font-bold text-2xl mt-2">{{ item.heading }}</p>
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
        { id: 1, image: require('@/assets/image/usage-flow/flow1.jpg'), alt: 'アプリからコースを予約している', heading: 'LINEから予約', text: 'クオースの<a class="text-blue-dark underline" href="https://lin.ee/zTsXoxq" @click="homeAddLine()">公式LINE</a>を友達追加して、ご予約していただくことができます。'},
        // アプリheading：アプリから予約
        // アプリテキスト：iPhoneをお使いの方は<a class="text-blue-dark underline" href="https://apps.apple.com/jp/app/qohs-home/id1483571890">App Store</a>から、iPhone以外のスマホをお使いの方は<a class="text-blue-dark underline" href="https://play.google.com/store/apps/details?id=me.qohs.qohsapp">Google Play</a>から、アプリをダウンロードしてください。
        { id: 2, image: require('@/assets/image/usage-flow/flow2.jpg'), alt: '予約を受けセラピストが出張している', heading: 'セラピストがご自宅へ伺います', text: 'セラピストがご予約いただいた時間の約5分前にご自宅へお伺いします。「インターホンを鳴らす前に連絡が欲しい」などのご要望がございましたらお申し付け下さい。'},
        { id: 3, image: require('@/assets/image/usage-flow/flow3.jpg'), alt: '施術をするための準備をしている', heading: '施術の準備をします', text: '施術者がお客様のご自宅へお伺いし、施術の準備をいたします。セラピストがヨガマットをお持ちいたしますので、お客様にご用意いただくのは、1メートル×2メートルのスペースのみです。<br>※ ご自宅のベッドで施術をすることもできます'},
        { id: 4, image: require('@/assets/image/usage-flow/flow4.jpg'), alt: 'お客様の家でセラピストが施術をしている', heading: '施術をお受けいただきます', text: 'お客様にご満足いただくため、最初にお体の状態をカウンセリングしてから施術に入ります。お客様の悩みに寄り添った施術をご提供し、施術後には体の専門家から見た体の状態をお伝えいたします。'}
      ]
    }
  },
  methods: {
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

