<template>
  <div class="container my-5">
    <h2 class="mb-4">Catégories</h2>
    <div class="d-flex flex-wrap mb-5 gap-2">
      <button
        v-for="cat in categories"
        :key="cat.id"
        @click="filterByCategory(cat.id)"
        type="button"
        class="btn btn-outline-primary"
      >
        {{ cat.name }}
      </button>
    </div>

    <h2 class="mb-4">Produits</h2>
    <div class="row">
      <div
        v-for="prod in filteredProducts"
        :key="prod.id"
        class="col-md-4 mb-4"
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
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

// Accès au store
const store = useStore()

// Catégorie sélectionnée
const selectedCategory = ref(null)

// Appels API au montage du composant
onMounted(() => {
  store.dispatch('fetchProducts')
  store.dispatch('fetchCategories')
})

// Récupération des produits et catégories depuis le store
const products = computed(() => store.getters.allProducts)
const categories = computed(() => store.getters.allCategories)

// Filtrage dynamique des produits
const filteredProducts = computed(() => {
  if (selectedCategory.value) {
    return products.value.filter(prod =>
      prod.categories?.some(cat => cat.id === selectedCategory.value)
    )
  }
  return products.value
})

// Fonction déclenchée au clic d’une catégorie
function filterByCategory(catId) {
  selectedCategory.value = catId
}
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
.price {
  color: orange;
}
.product-title {
  /* margin-bottom: 40px; */
  font-size: 35px;
  font-style: oblique;
}
</style>