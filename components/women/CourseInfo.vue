<template>
  <section class="bg-blue-dark pt-14 sp:pt-10">
    <div class="max-w-6xl mx-auto">
      <picture>
        <source srcset="@/assets/image/course-info/sp-women-description.png" v-bind:media="picture.sp"> 
        <img src="@/assets/image/course-info/pc-women-description.png" alt="コースと料金を示した画像">
      </picture>
      <figure class="mt-14 sp:mt-10">
        <img class="mx-auto" src="@/assets/image/course-info/head-spa.png" alt="ドライヘッドスパの紹介">
      </figure>
    </div>
  </section>
</template>

<script>
import { breakpoints } from '../../mixins/break-points';

export default {
  mixins: [ breakpoints ]
}
</script>