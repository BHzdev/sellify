<template>
  <section class="products-container">
    <div v-for="product in products" :key="product.id">
      <img
        v-if="product.fotos"
        :src="product.fotos[0].src"
        :alt="product.fotos[0].titulo"
      />
      <h2>{{ product.nome }}</h2>
      <p>{{ product.preco }}</p>
      <p>{{ product.descricao }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: null,
    };
  },
  methods: {
    getProducts() {
      fetch("http://localhost:3000/produto")
        .then((response) => response.json())
        .then((response) => {
          this.products = response;
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style></style>
