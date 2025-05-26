<template>
  <div class="home">
    <JuiceCarousel />
    <Category />
    <Product />
  </div>
</template>

<script>
import JuiceCarousel from '@/components/inc/Hero.vue'
import Product from '@/components/Product.vue'
import Category from '@/components/Category.vue'

export default {
  name: 'HomeView',
  components: {
  JuiceCarousel,
  Product,
  Category
  },
};
</script>
