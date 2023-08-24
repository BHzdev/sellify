<template>
  <section>
    <h1>👉 SELLIFY: Conectando Ofertas e Demandas 👈</h1>
    <ProductsSearch />
    <ProductsList />
  </section>
</template>

<script>
import ProductsSearch from "@/components/ProductsSearch.vue";
import ProductsList from "@/components/ProductsList.vue";

export default {
  name: "HomeView",
  components: {
    ProductsSearch,
    ProductsList,
  },
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  color: #833cdd;
  margin-top: 40px;
  text-align: center;
}

@media (max-width: 780px) {
  h1 {
    font-size: 1.5rem;
  }
}

@media (max-width: 450px) {
  h1 {
    font-size: 1.25rem;
  }
}
</style>
