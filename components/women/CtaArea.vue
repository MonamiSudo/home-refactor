<template>
  <section class="p-cta p-14 sp:py-10 sp:px-1">
    <div class="mx-auto max-w-6xl tab:w-11/12">
      <div class="text-center text-white">
        <h2 class="text-2xl font-bold tracking-widest sp:text-xl">【期間限定：3月31日まで】<br>アプリから初めてのご予約で<br class="hidden sp:block">施術料金が<span class="text-4xl text-yellow-500">50%OFF!</span></h2>
        <div class="mt-10 text-lg sp:mt-7">
          <p>アプリの予約画面でクーポンコードを<br class="hidden sp:block">ご入力ください。</p>
          <p>クーポンコード：<span class="font-bold">QOHS50</span></p>
        </div>
        <div class="mt-10 sp:mt-7"> 
          <p class="text-2xl font-bold">いますぐ無料ダウンロード！</p>
          <div class="flex justify-center">
            <a class="w-56 h-20 m-4 hover:cursor-pointer sp:m-2" 
              href="https://apps.apple.com/jp/app/qohs-home/id1483571890" 
              onClick="gtag('event', 'click', { 'event_category': 'app', 'event_label': 'appstore_women'});"
              target="_blank"
            >
              <img class="w-full h-full" src="@/assets/image/cta-area/app-store.svg" alt="">
            </a>
            <a class="w-56 h-20 m-4 hover:cursor-pointer sp:m-2"
              href="https://play.google.com/store/apps/details?id=me.qohs.qohsapp"
              onClick="gtag('event', 'click', { 'event_category': 'app', 'eventli_label': 'googleplaystore_women'});"
              target="_blank"
            >
              <img class="w-full h-full" src="@/assets/image/cta-area/google-play.svg" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .p-cta {
    background-image: url('@/assets/image/cta-area/cta-background.png');
    background-size: cover;
  }
</style>