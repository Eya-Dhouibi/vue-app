import { createStore } from 'vuex'
import axios from '../plugins/axios'

export default createStore({
  state: {
    products: [],      
    categories: [],   
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const res = await axios.get('/store/products') 
        console.log(res)
        commit('SET_PRODUCTS', res.data.products)
      } catch (error) {
        console.error("Erreur lors de la récupération des produits", error)
      }
    },
    async fetchCategories({ commit }) {
      try {
        const res = await axios.get('/store/categories')
        commit('SET_CATEGORIES', res.data.product_categories)
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories", error)
      }
    }
  },
  getters: {
    allProducts: state => state.products,
    allCategories: state => state.categories,
  }
})
