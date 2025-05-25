<template>
  <div class="container py-5">
    <a-row :gutter="[50, 0]">
      <!-- Liste des produits du panier -->
      <a-col
        :xl="{ span: 16 }"
        :lg="{ span: 16 }"
        :md="{ span: 12 }"
        :xs="{ span: 24 }"
      >
        <a-list
          class="demo-loadmore-list"
          item-layout="horizontal"
          :data-source="cart"
        >
          <template v-slot:renderItem="{ item }">
            <a-list-item style="min-height: 150px;">
              <a-list-item-meta :description="item.description">
                <template #title>
                  <h4 class="mb-1">{{ item.title }}</h4>
                </template>
                <template #avatar>
                  <img :src="item.thumbnail" width="100" alt="Image produit" />
                </template>
              </a-list-item-meta>

              <div class="d-flex flex-column align-items-end">
                <div class="list-count mb-2">Quantité : {{ item.value }}</div>
                <div class="d-flex gap-2">
                  <a-button
                    @click="increaseNumber(item.id)"
                    type="primary"
                    shape="circle"
                    size="small"
                  >
                    +
                  </a-button>
                  <a-button
                    @click="decreaseNumber(item.id)"
                    type="default"
                    shape="circle"
                    size="small"
                  >
                    -
                  </a-button>
                  <a-button
                    @click="deleteProduct(item.id)"
                    type="danger"
                    shape="circle"
                    size="small"
                  >
                    <a-icon type="delete" />
                  </a-button>
                </div>
              </div>
            </a-list-item>
          </template>
        </a-list>

        <div v-if="cart.length === 0" class="text-center py-5 text-muted">
          Aucun produit dans le panier.
        </div>
      </a-col>

      <!-- Résumé de la commande -->
      <a-col
        :xl="{ span: 8 }"
        :lg="{ span: 8 }"
        :md="{ span: 12 }"
        :xs="{ span: 24 }"
      >
        <a-affix :offset-top="120">
          <a-row>
            <a-col :span="16">
              <a-alert :message="'Total : ' + getTotalBill + ' TND'" type="success" />
            </a-col>
            <a-col :span="8" class="text-end">
              <a-button type="primary" block @click="gotoCheckoutPage">
                Commander
              </a-button>
            </a-col>
          </a-row>

          <br />

          <a-table
            :columns="columns"
            :data-source="getBillBreakDown"
            :pagination="false"
            :scroll="{ y: 440, x: 200 }"
            size="small"
          >
          </a-table>
        </a-affix>
      </a-col>
    </a-row>
  </div>
</template>

<script>
const columns = [
  {
    title: 'Produit',
    dataIndex: 'title',
    key: 'title',
    width: 100,
  },
  {
    title: 'Qté',
    dataIndex: 'value',
    key: 'value',
    width: 60,
  },
  {
    title: 'Prix Unitaire',
    dataIndex: 'price',
    key: 'price',
    width: 80,
    ellipsis: true,
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    width: 100,
    ellipsis: true,
  },
];

import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
  data() {
    return {
      columns,
    };
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['getTotalBill', 'getBillBreakDown']),
  },
  methods: {
    gotoCheckoutPage() {
      this.$router.push('checkout');
    },
    ...mapMutations(['increaseCount', 'decreaseCount', 'removeProduct']),
    increaseNumber(id) {
      this.increaseCount(id);
    },
    decreaseNumber(id) {
      this.decreaseCount(id);
    },
    deleteProduct(id) {
      this.removeProduct(id);
    },
  },
};
</script>

<style scoped>
.container {
  padding: 0 20px;
}
.list-count {
  font-weight: 500;
}
.demo-loadmore-list {
  background-color: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 10px;
}
.ant-list-item-meta {
  align-items: center;
}
</style>
