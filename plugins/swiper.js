// デフォルトのvue-awesome-swiper設定
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css' // 5.x以下
// import 'swiper/swiper-bundle.css' // 6.0以上
Vue.use(VueAwesomeSwiper)



// import Swiper from 'swiper/swiper-bundle.esm'
// import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
// Vue.use(getAwesomeSwiper(Swiper))



// ビルドできるかどうか試してみた
// import {Swiper as SwiperClass, Pagination, Navigation, Mousewheel, Autoplay} from 'swiper/swiper.esm'
// import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

// // import style
// import 'swiper/swiper-bundle.min.css'

// SwiperClass.use([Pagination, Mousewheel, Navigation, Autoplay])
// Vue.use(getAwesomeSwiper(SwiperClass))
