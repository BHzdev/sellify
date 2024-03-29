<template>
  <section>
    <div v-if="product" class="product">
      <ul class="product-photo" v-if="product.fotos">
        <li
          v-for="(foto, index) in product.fotos"
          :key="index"
          @click="changeFirstChild(index)"
          :class="{ 'first-child': index === selectedImageIndex }"
        >
          <img :src="foto.src" :alt="foto.titulo" />
        </li>
      </ul>
      <div class="product-info">
        <h1>{{ product.nome }}</h1>
        <p class="product-price">{{ product.preco | priceNumber }}</p>
        <p class="product-description">{{ product.descricao }}</p>
        <transition mode="out-in" v-if="product.vendido === 'false'">
          <button class="btn" v-if="!finish" @click="finish = true">
            Comprar
          </button>
          <FinalizePurchase v-else :produto="product" />
        </transition>
        <button v-else class="btn" disabled>Produto Vendido</button>
      </div>
    </div>
    <LoadingPage v-else />
  </section>
</template>

<script>
import { api } from "@/services.js";
import FinalizePurchase from "@/components/FinalizePurchase.vue";

export default {
  name: "ProductView",
  props: ["id"],
  components: {
    FinalizePurchase,
  },
  data() {
    return {
      product: null,
      finish: false,
      selectedImageIndex: 0,
    };
  },
  methods: {
    getProduct() {
      api.get(`/produto/${this.id}`).then((response) => {
        this.product = response.data;
        document.title = this.product.nome;
      });
    },
    changeFirstChild(index) {
      this.selectedImageIndex = index;
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

<style scoped>
.product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.product-photo {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.product-photo li {
  flex: 1;
  min-width: 200px;
  min-height: 200px;
}

.product-photo li.first-child {
  min-width: 100%;
  order: -1;
}

.product-price {
  color: #0da51d;
  font-weight: bold;
  font-size: 1.5rem;
}

.product-description {
  font-size: 1.25rem;
}

img {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

.btn {
  width: 150px;
  margin-top: 8px;
}

@media (max-width: 500px) {
  .product {
    grid-template-columns: 1fr;
  }
  .product-photo {
    grid-row: 2;
  }
}
</style>
