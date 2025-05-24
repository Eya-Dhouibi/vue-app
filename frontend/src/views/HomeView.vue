<template>
  <div class="home">
    <JuiceCarousel />
    <Product />
  </div>
</template>

<script>
import JuiceCarousel from '@/components/inc/Hero.vue'
import Product from '@/components/Product.vue'

export default {
  name: 'HomeView',
  components: {
  JuiceCarousel,
  Product,
  },
};
</script>
