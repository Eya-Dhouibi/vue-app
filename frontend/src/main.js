import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './plugins/axios';


// BootstrapVue3
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// vue-material-design-icons
import CartIcon from 'vue-material-design-icons/Cart.vue';
import BellIcon from 'vue-material-design-icons/Bell.vue';
import AccountCircleIcon from 'vue-material-design-icons/AccountCircle.vue';

// Import Swiper et ses modules
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay]);

// Import global des styles Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const app = createApp(App);

app.use(store);
app.use(router);

app.config.globalProperties.$axios = axios

app.component('CartIcon', CartIcon);
app.component('BellIcon', BellIcon);
app.component('AccountCircleIcon', AccountCircleIcon);

app.component('Swiper', Swiper);
app.component('SwiperSlide', SwiperSlide);

app.mount('#app');
