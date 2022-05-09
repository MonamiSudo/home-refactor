<template>
  <section class="p-maternity-problem py-14 mb-20 relative">
    <div class="text-center max-w-5xl mx-auto w-11/12 tab:w-24/25">
      <h1 class="p-user-theme inline-block text-center text-2xl font-bold relative sp:text-xl">こんな<span class="text-3xl text-white">お悩み</span>ありませんか？</h1>
      <ul class="flex justify-between flex-wrap gap-y-6 mt-10 sp:justify-center">
        <li class="p-user-theme__item w-72 h-72 block bg-cover flex content-center items-center" v-for="item in items" :key="item.text">
          <p class="w-full  text-center px-6 tracking-widest leading-loose sp:text-sp" v-html="item.text"></p>
        </li>
      </ul>
    </div>
    <div class="p-triangle-appear"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: '妊娠してから<br><span class="font-bold text-red-dark">むくみ</span>がすごい。<br><br>手足や首、背中に<span class="font-bold text-red-dark">リンパが滞っている</span>感じがしてほぐしたい・・' },
        { text: '<span class="font-bold text-red-dark">お尻やお尻の奥</span><br>に痛みを感じる。<br><br>痛いけど、<br>どう直していいか分からない。' },
        { text: 'お腹が大きくなるにつれて、<span class="font-bold text-red-dark">腰の痛み</span>が増してきた。<br><br>立ち上がる時など<br>腰が痛い・・' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .p-maternity-problem {
    background-color: rgba(105, 173, 180, 0.6);
    &::after { // 下に視線を誘導する矢印
      background-image: url(../../assets/image/maternity/userTheme/arrow-down.png);
      background-repeat: no-repeat;
      background-size: contain;
      content: "";
      display: inline-block;
      height: 100px;
      width: 100px;
      margin-left: -50px;
      position: absolute;
      left: 50%;
      bottom: -66px;
    }
  }
  // ページ装飾のCSS 
  // .p-triangle {
  //   position: relative;
  //   &-appear {
  //     width: 0;
  //     height: 0;
  //     border-style: solid;
  //     border-width: 100px 100px 0 100px;
  //     border-color: #E1F2F0 transparent transparent transparent;
  //     position: absolute;
  //     left: 50%;
  //     margin-left: -100px;
  //   }
  // }
  .p-user-theme {
    &::before {
      background-image: url(../../assets/image/maternity/userTheme/question-logo.png);
      content: "";
      display: inline-block;
      height: 60px;
      width: 60px;
      position: absolute;
      top: -20px;
      left: -50px;
      background-size: cover;
    }
    &__item {
      background-image: url(../../assets/image/maternity/userTheme/question.png);
      content: '';
    }
  }
</style>