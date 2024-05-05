<template>
  <section class="bg-gray-100 py-20 px-14 sp:py-10 sp:px-1">
    <div class="max-w-5xl mx-auto tab:w-11/12">
      <div class="bg-white py-10 px-20 sp:py-8 sp:px-4">
        <h2 class="text-2xl font-bold text-center">テレビ局から取材を受けました</h2>
        <div class="mt-4">
          <p class="text-center sp:text-left">パウワウブランドとして、これまで100回以上様々なメディアに取り上げていただきました。</p>
          <p class="text-xl mt-12 text-center font-bold">出演メディア</p>
          <ul class="flex flex-wrap gap-7 justify-center mt-4">
            <li class="w-1/4 sp:w-2/5 h-20 border border-gray-200" v-for="mediaImage in mediaImages" :key="mediaImage.id">
              <figure class="w-full h-full">
                <img class="w-full h-full object-contain" :src="require('@/assets/image/media/' + mediaImage.name)" alt="">
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mediaImages: [
        { id: 1, name: 'sukkiri.png' },
        { id: 2, name: 'news-every.png' },
        { id: 3, name: 'oha4.png' },
        { id: 4, name: 'gaia.png' },
        { id: 5, name: 'super-j-channel.png' },
        { id: 6, name: 'hiruobi.png' },
      ],
      message: 'メッセージ'
    }
  }
}
</script>
