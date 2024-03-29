<template>
  <section class="products-container">
    <transition mode="out-in">
      <div v-if="products && products.length" class="products" key="products">
        <div class="product" v-for="(product, index) in products" :key="index">
          <router-link :to="{ name: 'produto', params: { id: product.id } }">
            <img
              v-if="product.fotos"
              :src="product.fotos[0].src"
              :alt="product.fotos[0].titulo"
            />
            <h2 class="product-name">{{ product.nome }}</h2>
            <p class="product-price">{{ product.preco | priceNumber }}</p>
            <p class="product-desc">
              {{ limitCharacters(product.descricao, 100) }}
            </p>
          </router-link>
        </div>
        <ProductsPage
          :productsTotal="productsTotal"
          :productsPerPage="productsPerPage"
        />
      </div>
      <div v-else-if="products && products.length === 0" key="no-results">
        <p class="no-results">
          Busca sem resultados. Tente buscar outro termo.
        </p>
      </div>
      <LoadingPage key="loading" v-else />
    </transition>
  </section>
</template>

<script>
import ProductsPage from "@/components/ProductsPage.vue";
import { api } from "@/services.js";
import { serialize } from "@/helpers.js";

export default {
  name: "ProductsList",
  components: {
    ProductsPage,
  },
  data() {
    return {
      products: null,
      productsPerPage: 8,
      productsTotal: 0,
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
      this.products = null;
      setTimeout(() => {
        api.get(this.url).then((response) => {
          this.productsTotal = Number(response.headers["x-total-count"]);
          this.products = response.data;
        });
      }, 500);
    },
    limitCharacters(description, limit) {
      if (description.length <= limit) return description;
      return description.slice(0, limit) + "...";
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
  margin: 40px auto 0 auto;
  padding: 0 20px;
}

.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
  margin: 0 auto;
  border-radius: 4px;
  margin-bottom: 16px;
  max-width: 100%;
  max-height: 300px;
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

@media (max-width: 1200px) {
  .products {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 780px) {
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
