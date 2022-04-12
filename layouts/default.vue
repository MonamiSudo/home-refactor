<!-- 一般的な半額バナーを表示させるにはこのレイアウト -->
<template>
  <div>
    <Nuxt />
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Footer: Footer
  }
}
</script>