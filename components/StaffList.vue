<template>
  <section class="py-14">
    <div class="mx-auto max-w-6xl tab:w-11/12">
      <h2 class="text-3xl font-bold text-center">パートナー紹介</h2>
      <p class="text-gray-600 text-center mt-2 sp:text-left">出張には施術研修を受けたパートナー（セラピスト）が伺います。<br>アプリからご希望のパートナーを選ぶことができます。</p>
      <ul class="flex mt-14 justify-between flex-wrap gap-y-8">
        <li class="w-11/50 tab:w-12/25 sp:w-full" v-for="staff in staffs" :key="staff.id">
          <figure class="bg-blue-thin h-80 rounded-lg">
            <img class="h-full mx-auto " :src="staff.image" alt="">
          </figure>
          <p class="mt-6 leading-relaxed tracking-wider" v-html="staff.message"></p>
        </li>
      </ul>
    </div>  
  </section>
</template>

<script>
export default {
  data() {
    return {
      staffs: [
        { id: 1, image: require('@/assets/image/staff-list/staff-akagi.jpg'), message: 'いい仕事や家事を気持ちよく行う為には、体も良い状態でいることがとても大切だと思っております。<br><br>筋肉・骨格の歪みを整えることで、楽な状態が当たり前になるように、施術・ストレッチ等、お伝えさせていただきます！整体を通して、体も気持ちも健康で、笑顔の時間が増えるようにサポートさせてください！' },
        { id: 2, image: require('@/assets/image/staff-list/staff-kakinohana.png'), message: '整体を受けることは、体を整えるだけでなく、心を整えることに繋がります。周りの人と物理的に接することが減った今、心身の疲れを外に排出しにくいと思います。<br><br>そんな方たちが施術を通して、心身ともに元気になり、「自身のケアの大切さ」をお伝えできればと思います。時間がなく、誰にも言えない悩みがあったら、そっと教えてください。' },
        { id: 3, image: require('@/assets/image/staff-list/staff-anonymous.jpg'), message: 'お客様とお会いして話を聞くことは、私とは違う人生の生き方を知る機会になり、楽しみになっています。<br><br>施術を通して体をほぐし、笑顔が増えた時には喜びを感じます。お会いできたときは、どんなことでもいいのでお話を聞かせてください！' },
        { id: 4, image: require('@/assets/image/staff-list/staff-watanabe.jpg'), message: '私自身も出産を経験し、産後の身体の変化や心の状態に不安を感じたことがありました。そんな産後のママに寄り添い、また頑張れる体に戻すことがモットーです。<br><br>毎日慌ただしい生活を送るなか、少しでも心身ともにサポートさせていただけたらと思います。' },
        { id: 5, image: require('@/assets/image/staff-list/staff-katsuzaki.jpg'), message: '出産後、子供が小さい頃は自宅で料理教室をしていました。その後に整体・痩身オイルリンパマッサージを経験し、自宅サロンをオープンするほど施術に打ち込みました。<br><br>qohsのパートナーとしてお客様の健康をサポートさせていただきます！' },
      ]
    }
  }
}
</script>