<template>
  <section>
    <div v-if="sales">
      <h2>Vendas</h2>
      <div class="products" v-for="(sale, index) in sales" :key="index">
        <ProductItem v-if="sale.produto" :product="sale.produto">
          <p class="buyer"><span>Comprador: </span>{{ sale.comprador_id }}</p>
        </ProductItem>
        <div class="delivery">
          <h3>Endereço:</h3>
          <ul v-if="sale.endereco">
            <li v-for="(value, key) in sale.endereco" :key="key">
              {{ key }}: {{ value }}
            </li>
          </ul>
        </div>
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
      sales: null,
    };
  },
  computed: {
    ...mapState(["usuario", "login"]),
  },
  methods: {
    getSales() {
      api.get(`/transacao?vendedor_id=${this.usuario.id}`).then((response) => {
        this.sales = response.data;
      });
    },
  },
  watch: {
    login() {
      this.getSales();
    },
  },
  created() {
    if (this.login) {
      this.getSales();
    }
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 32px;
}

.buyer {
  margin-top: 16px;
}

.delivery {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  margin-bottom: 32px;
}

h3 {
  margin: 0;
  justify-self: end;
}
</style>
