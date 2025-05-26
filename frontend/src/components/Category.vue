<template>
  <div class="container my-5">
    <h2 class="mb-4">Catégories</h2>
    <div class="d-flex justify-content-center flex-wrap mb-5 gap-2">
      <button
        v-for="cat in categories"
        :key="cat.id"
        type="button"
        class="btn btn-outline-primary"
      >
        {{ cat.name }}
      </button>
    </div>
</div>

</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

// Store
const store = useStore()

// Appels API au montage du composant
onMounted(() => {
  store.dispatch('fetchCategories')
})

// Récupération des catégories depuis le store
const categories = computed(() => store.getters.allCategories)

</script>
