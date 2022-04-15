<template>
  <section class="bg-gray-100 py-20 px-14 sp:py-10 sp:px-1">
    <div class="max-w-5xl mx-auto tab:w-11/12">
      <div class="bg-white py-10 px-20 sp:py-8 sp:px-4">
        <h2 class="text-2xl font-bold text-center">百貨店で整体サロンを運営する会社のサービスです</h2>
        <div class="flex justify-between mt-10 tab:flex-wrap">
          <figure class="w-2/5 tab:w-full">
            <img src="@/assets/image/store-achivement/department-logo.png" alt="出店している百貨店のロゴ" v-lazy-load>
          </figure>
          <div class="w-1/2 tab:w-full tab:mt-7">
            <p>マルイシティ横浜、東急プラザ渋谷、そごう横浜、西武池袋など。関東の百貨店や商業施設で、整体サロンを運営する会社のサービスです。</p>
            <p class="mt-10">クオースの姉妹ブランドには、
              <a :href="links.powwow" class="text-blue-600 underline hover:cursor-pointer inline-block" target="_blank">ウィメンズヘルスケアサロン パウワウ</a>
              や、
              <a :href="links.charge" class="text-blue-600 underline hover:cursor-pointer inline-block" target="_blank">ファスト整体スタンド チャージ</a>
              があります。
            </p>
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
