<template>
  <swiper class="swiper-slides"
    :modules="[Navigation, Pagination, Autoplay]"
    :pagination="{ clickable: true }"
    :navigation="true"
    :autoplay="{ delay: 4000 }"
    :loop="true"
  >
    <swiper-slide v-for="(juice, index) in juices" :key="index">
      <img :src="juice.image" />
      <div class="caption">
        <h3>{{ juice.name }}</h3>
        <p>{{ juice.description }}</p>
      </div>
    </swiper-slide>
  </swiper>
</template>


<script setup>
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import hero01 from '@/assets/hero-01.jpg'
import hero02 from '@/assets/hero-02.jpg'
import hero03 from '@/assets/hero-03.jpg'

const juices = [
  { name: 'Orange Fresh', image: hero01, description: 'Fresh orange juice pressed every morning.' },
  { name: 'Tropical Mix', image: hero02, description: 'An energizing blend of pineapple, mango, and banana.' },
  { name: 'Detox Green', image: hero03, description: 'Revitalizing green juice with spinach, lemon, and apple.' }
]
</script>

<style>
.swiper-slides {
  width: 100%;
  height: 480px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.swiper-slide {
  position: relative;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Caption overlay */
.caption {
  position: absolute;
  bottom: 30px;
  left: 30px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 15px 20px;
  border-radius: 8px;
  max-width: 80%;
}

.caption h3 {
  font-size: 24px;
  margin: 0 0 8px;
}

.caption p {
  font-size: 16px;
  margin: 0;
}

/* Navigation buttons */
.swiper-slides .swiper-button-next,
.swiper-slides .swiper-button-prev {
  color: #fff;
  width: 28px;
  height: 28px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  transition: background 0.3s;
}

.swiper-slides .swiper-button-next:after, 
.swiper-slides .swiper-button-prev:after{
font-size: 12px;
}
.swiper-slides .swiper-button-next:hover,
.swiper-slides .swiper-button-prev:hover {
  background: rgba(0, 0, 0, 0.7);
}

/* Pagination bullets */
.swiper-slides .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background: #ffffff;
  opacity: 0.9;
  margin: 0 6px;
  transition: all 0.3s;
  border-radius: 50%;
}

.swiper-slides .swiper-pagination-bullet-active {
  background: #ff6600;
  opacity: 1;
  transform: scale(1.2);
}

/* Responsive */
@media (max-width: 768px) {
  .swiper {
    height: 300px;
  }

  .caption {
    bottom: 20px;
    left: 20px;
    padding: 10px 14px;
  }

  .caption h3 {
    font-size: 18px;
  }

  .caption p {
    font-size: 14px;
  }
}

</style>
