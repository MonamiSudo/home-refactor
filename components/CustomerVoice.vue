<template>
  <section class="py-14 bg-blue-thin">
    <h2 class="text-3xl font-bold text-center">お客様の声</h2>
    <div class="mx-auto max-w-6xl w-24/25 tab:w-11/12">
      <ul class="flex justify-between flex-wrap gap-y-6 mt-12 sp:block sp:overflow-x-auto sp:whitespace-nowrap sp:mt-10">
        <li class="bg-white p-6 rounded-lg w-12/25 sp:inline-block sp:w-43/50 sp:mr-4 sp:align-top" v-for="item in items" :key="item.id">
          <figure class="h-72">
            <img class="rounded-lg h-full w-full object-cover" :src="item.image" alt="">
          </figure>
          <h3 class="text-lg text-blue-dark mt-6" v-html="item.heading"></h3>
          <p class="leading-relaxed tracking-wider mt-1 sp:whitespace-pre-wrap" v-html="item.text"></p>
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
        { id: 1, image: require('@/assets/image/customer-voice/voice1.jpeg'), heading: '東京都在住 E様', text: '好きなアロマの香りを選んで 身体の状態を分析してもらって、全身マッサージと骨盤矯正をやってもらいました。<br><br>家でできる「骨盤周りの筋肉をほぐすストレッチ」を教えていただき感謝です！湯船に毎日浸かり、教えてもらったストレッチをしっかりするようにしてから、脚もスッキリ！<br><br>子育てで一番大事なことって、「ママが元気でいること」だと常々思います。月1〜2回のクオースホームの骨盤矯正と全身マッサージと、日々のストレッチで、身体をメンテナンスするのが最近のルーティンです。' },
        { id: 2, image: require('@/assets/image/customer-voice/voice2.jpg'), heading: '東京都在住 O様', text: '昨年、妊娠・出産をしました。子育てをしていると、肩こりや腰痛など、自分の体の不調は後回しになってしまいます。<br><br>体の疲れや可動域を施術前に見てもらい、腰のこりと顔の歪みが気になっていたので、その2点をメインでやってもらいました。<br><br>施術後の変化に驚きました！骨盤矯正で下腹部のふくらみが減り。凝り固まっていたアゴの筋肉をほぐしてもらい。頭蓋骨もケアしてもらったことで一回りスッキリしました！' },
        { id: 3, image: require('@/assets/image/customer-voice/voice3.jpg'), heading: '東京都在住 N様', text: 'リモートワーク中の昼休みや、家事の合間など。ちょっとした隙間時間に癒されることができて、忙しいママにとってはすごくありがたいです。<br><br>産後は、腰や腕が痛くても整体に行く時間がなかったり、疲れて外出する元気がなかったので、こういうサービスがもっと広がってくれたらいいなと思いました。' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>