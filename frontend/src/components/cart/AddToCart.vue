<template>
  <a-button type="primary" @click="handleAddToCart" size="large">
    Ajouter au panier
  </a-button>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'AddToCart',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations(['addProductToCart']),
    handleAddToCart() {
      const productData = {
        id: this.product.id,
        title: this.product.title,
        thumbnail: this.product.thumbnail,
        price: this.product.variants[0].prices[0].amount / 100,
        description: this.product.description,
        value: 1,
      };
      this.addProductToCart(productData);
    },
  },
};
</script>

<style scoped>
a-button {
  margin-top: 10px;
  cursor:pointer;
}
</style>
