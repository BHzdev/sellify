<template>
  <section class="products-container">
    <div v-if="products && products.length" class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <router-link to="/">
          <img
            v-if="product.fotos"
            :src="product.fotos[0].src"
            :alt="product.fotos[0].titulo"
          />
          <h2 class="product-name">{{ product.nome }}</h2>
          <p class="product-price">{{ product.preco }}</p>
          <p class="product-desc">{{ product.descricao }}</p>
        </router-link>
      </div>
    </div>
    <div v-else-if="products && products.length === 0">
      <p class="no-results">Busca sem resultados. Tente buscar outro termo.</p>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";
import { serialize } from "@/helpers.js";

export default {
  data() {
    return {
      products: null,
      productsPerPage: 9,
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);
      return `/produto?_limit=${this.productsPerPage}${query}`;
    },
  },
  methods: {
    getProducts() {
      api.get(this.url).then((response) => {
        this.products = response.data;
      });
    },
  },
  watch: {
    url() {
      this.getProducts();
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style scoped>
.products-container {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 60px;
  padding: 0 20px;
}

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.product {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  background: white;
  border-radius: 8px;
  transition: all 0.2s;
}

.product:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.product img {
  border-radius: 4px;
  margin-bottom: 16px;
  max-width: 100%;
}

.product-name {
  margin-bottom: 12px;
}

.product-price {
  font-weight: bold;
  color: #0da51d;
  margin-bottom: 8px;
}

.no-results {
  text-align: center;
}

@media (max-width: 762px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 450px) {
  .products {
    grid-template-columns: 1fr;
  }
}
</style>
