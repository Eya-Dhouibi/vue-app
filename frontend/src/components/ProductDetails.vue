<template>
  <div class="container my-5">
    <div v-if="product">
      <h2>{{ product.title }}</h2>
      <img :src="product.thumbnail" :alt="product.title" class="img-fluid mb-3" />
      <p><strong>Price:</strong> {{ product.price }} TND</p>
      <p><strong>Description:</strong> {{ product.description }}</p>
      <AddToCart :product="product" />
    </div>
    <div v-else>
      <p>Chargement du produit...</p>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed,onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AddToCart from '@/components/cart/AddToCart.vue'

const store = useStore()
const route = useRoute()

// Récupère l'id depuis l'URL
const productId = route.params.id

const product = computed(() => store.getters.getProductById(productId))

onMounted(async () => {
  if (!store.getters.getProductById(productId)) {
    await store.dispatch('fetchProductById', productId)
  }
})

</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}
</style>
