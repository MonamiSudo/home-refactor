<template>
  <section class="pt-5 pb-14">
    <div class="max-w-6xl mx-auto tab:w-11/12">
      <h1 class="mb-10 text-3xl font-bold text-center sp:text-left sp:text-xl sp:mb-4">おうちで整体！お体の悩みを解決！</h1>
      <ul class="mx-auto max-w-xl flex flex-col gap-y-3">
        <li class="flex items-center" v-for="item in items" :key="item.id">
          <figure class="w-9 h-9">
            <img class="w-full h-full" src="@/assets/image/maternity/userAnswer/check-mark.png" alt="">
          </figure>
          <p class="ml-2 tracking-widest leading-relaxed sp:text-sm sp:w-full w-11/12">{{ item.text }}</p>
        </li>
      </ul>
    </div>
    <div class="flex overflow-hidden">
      <ul class="slideshow flex mt-14">
        <li class="w-80 mx-4" v-for="image in images" :key="image.src">
          <img class="w-full h-full" :src="image.src" alt="">
        </li>
      </ul>
      <ul class="slideshow flex mt-14">
        <li class="w-80 mx-4" v-for="image in images" :key="image.src">
          <img class="w-full h-full" :src="image.src" alt="">
        </li>
      </ul>
      <ul class="slideshow flex mt-14">
        <li class="w-80 mx-4" v-for="image in images" :key="image.src">
          <img class="w-full h-full" :src="image.src" alt="">
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
        { id: 1, text: '安定期【妊娠16週目(5ヶ月)から妊娠27週目(9ヶ月)】の方に受けていただけます。' },
        { id: 2, text: 'ままセラピストによるカウンセリング。' },
        { id: 3, text: 'むくみ解消、施術後から軽々しい体に。' },
        { id: 4, text: '立ち上がる時など、腰痛・お尻の痛みを軽減。' },
      ],
      images: [
        { src: require('@/assets/image/maternity/userAnswer/treatment1.png') },
        { src: require('@/assets/image/maternity/userAnswer/treatment2.png') },
        { src: require('@/assets/image/maternity/userAnswer/treatment3.jpeg') },
        { src: require('@/assets/image/maternity/userAnswer/treatment4.png') },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .slideshow {
    animation: loop-slide 40s infinite linear 1s both;
  }
  @keyframes loop-slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
</style>