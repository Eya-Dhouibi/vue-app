import { createStore } from 'vuex'
import axios from '../plugins/axios'

export default createStore({
  state: {
    products: [],      
    categories: [], 
    cart: [],  
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },

    addProductToCart(state, product) {
    const existing = state.cart.find(p => p.id === product.id);
    if (existing) {
      existing.value += product.value;
    } else {
      state.cart.push(product);
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

  },
  getters: {
    allProducts: state => state.products,
    allCategories: state => state.categories,
  }
})
