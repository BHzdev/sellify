<template>
  <section>
    <div v-if="purchases">
      <h2>Compras</h2>
      <div class="products" v-for="(purchase, index) in purchases" :key="index">
        <ProductItem v-if="purchase.produto" :product="purchase.produto">
          <p class="seller">
            <span>Vendedor: </span>{{ purchase.vendedor_id }}
          </p>
        </ProductItem>
      </div>
    </div>
  </section>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import { mapState } from "vuex";
import { api } from "@/services.js";

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      purchases: null,
    };
  },
  computed: {
    ...mapState(["usuario", "login"]),
  },
  methods: {
    getPurchases() {
      api.get(`/transacao`).then((response) => {
        this.purchases = response.data;
      });
    },
  },
  watch: {
    login() {
      this.getPurchases();
    },
  },
  created() {
    if (this.login) {
      this.getPurchases();
    }
    document.title = "Usuário | Compras";
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 32px;
}

.seller {
  margin-top: 16px;
}
</style>
