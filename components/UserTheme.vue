<template>
  <section class="py-14">
    <div class="mx-auto max-w-6xl tab:w-11/12">
      <h2 class="text-center text-3xl font-bold tracking-widest">こんなお悩みありませんか？</h2>
      <ul class="flex justify-center mt-10 tab:flex-wrap">
        <li class="circle-item bg-blue-thin w-56 h-56 rounded-full relative mx-4 tab:w-5/12 tab:h-72 sp:w-1/2 sp:m-0 sp:h-44" v-for="item in items" :key="item.id">
          <p class="w-10/12 mx-auto pt-4 leading-relaxed tab:pt-10 tab:text-center">{{ item.text }}</p>
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
        { id: 1, text: '小さい子供がいるから、マッサージのお店に気軽に行けない' },
        { id: 2, text: '出産してから、骨盤の広がりやお腹周りが気になる' },
        { id: 3, text: '出張整体に興味はあるけど、知らない人を家にあげるのは怖い' },
        { id: 4, text: '体は疲れているけど、お店にマッサージを受けに行くのはおっくう' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .circle-item {
    &::before {
      content: "";
      display: block;
      width: 32px;
      height: 32px;
      background-color: #fff;
      margin: 44px auto 0;
    }
    &::after {
      content: "";
      display: block;
      background-image: url(@/assets/image/user-theme/check-orange.svg);
      width: 32px;
      height: 32px;
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      top: 50px;
      right: 42%;
    }
  }
</style>
