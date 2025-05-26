import { createStore } from 'vuex'
import axios from '../plugins/axios'

export default createStore({
  state: {
    products: [],
    categories: [],
    cart: [],
    currentProduct: null  // ← produit sélectionné
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },
    SET_CURRENT_PRODUCT(state, product) {
      state.currentProduct = product
    },
    addProductToCart(state, product) {
      const existing = state.cart.find(p => p.id === product.id)
      if (existing) {
        existing.value += product.value
      } else {
        state.cart.push(product)
      }
    },
  },

  actions: {
    async fetchProducts({ commit }) {
      try {
        const res = await axios.get('/store/products')
        commit('SET_PRODUCTS', res.data.products)
      } catch (error) {
        console.error("Erreur lors de la récupération des produits", error)
      }
    },

    async fetchCategories({ commit }) {
      try {
        const res = await axios.get('/store/product-categories')
        commit('SET_CATEGORIES', res.data.product_categories)
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories", error)
      }
    },

    async fetchProductById({ commit, state }, id) {
      try {
        // Cherche d'abord dans les produits existants
        let product = state.products.find(prod => prod.id === parseInt(id))

        // Si pas trouvé, appel API (optionnel selon ton backend)
        if (!product) {
          const res = await axios.get(`/store/products/${id}`)
          product = res.data
        }

        commit('SET_CURRENT_PRODUCT', product)
        return product
      } catch (error) {
        console.error('Erreur lors de la récupération du produit :', error)
        throw error
      }
    }
  },

  getters: {
    allProducts: state => state.products,
    allCategories: state => state.categories,
    getProductById: (state) => (id) => {
      return state.products.find(prod => prod.id === parseInt(id))
    },
    currentProduct: state => state.currentProduct
  }
})
