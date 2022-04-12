<!-- マタニティの半額バナーを表示させるにはこのレイアウト -->
<template>
  <div>
    <Nuxt />
    <FooterMaternity/>
  </div>
</template>

<script>
import FooterMaternity from '@/components/FooterMaternity.vue'

export default {
  components: {
    FooterMaternity: FooterMaternity
  }
}
</script>