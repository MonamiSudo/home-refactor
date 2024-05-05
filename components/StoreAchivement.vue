<template>
  <section class="py-20 px-14 sp:py-10 sp:px-1">
    <div class="max-w-5xl mx-auto tab:w-11/12">
      <div class="bg-white py-10 px-20 sp:py-8 sp:px-4">
        <h2 class="text-2xl font-bold text-center">百貨店で整体サロンを運営する会社のサービスです</h2>
        <div class="flex justify-between mt-10 tab:flex-wrap">
          <figure class="w-2/5 border border-gray-200 tab:w-full">
            <img src="@/assets/image/store-achivement/salon-logo2.png" alt="丸ビル" v-lazy-load>
          </figure>
          <div class="w-1/2 tab:w-full tab:mt-7">
            <p>丸ビル、東急プラザ渋谷、そごう横浜など、全国の百貨店や商業施設で整体サロンを22店舗運営する会社のサービスです。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      links: {
        powwow: 'https://powwow-ginza.com',
        charge: 'https://charge10.tokyo/'
      }
    }
  },
}
</script>
