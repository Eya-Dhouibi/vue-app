<template>
  <div class="container my-5">
    <h2 class="mb-4">Produits</h2>
    <div class="row">
<div
  v-for="prod in products"
  :key="prod.id"
  class="col-md-4 mb-4"
>
  <router-link
    :to="`/product/${prod.id}`"
    class="text-decoration-none text-dark"
  >
    <div class="card h-100 shadow-sm">
      <img
        :src="prod.thumbnail"
        class="card-img-top"
        :alt="`Image de ${prod.title}`"
        style="object-fit: cover; height: 200px;"
      />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ prod.title }}</h5>
        <p class="card-text mt-auto">
          Price: {{ prod.price }} TND
        </p>
      </div>
    </div>
  </router-link>

  <!-- AddToCart bouton séparé -->
  <div class="mt-2 text-center">
    <AddToCart :product="prod" />
  </div>
</div>

    </div>
  </div>
</template>

<script setup>
import {computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import AddToCart from '@/components/cart/AddToCart.vue'

// Store
const store = useStore()

// Appels API au montage du composant
onMounted(() => {
  store.dispatch('fetchProducts')
})

// Récupération des produits et catégories depuis le store
const products = computed(() => store.getters.allProducts)

</script>


<style scoped>
.product-name {
  font-weight: 600;
  text-transform: capitalize;
}
.ant-card-cover img {
  object-fit: contain;
  min-height: 280px;
  max-height: 280px;
  display: inline-block;
  padding: 12px;
}
.ant-card {
  height: 420px;
}

</style>