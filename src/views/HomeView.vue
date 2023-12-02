<template>
  <section>
    <h1 ref="title">SELLIFY: Conectando Ofertas e Demandas</h1>
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
  created() {
    document.title = "Sellify";
  },
  mounted() {
    const title = this.$refs.title;
    this.typeWriter(title);
  },
  methods: {
    typeWriter(element) {
      const textArray = element.innerHTML.split("");
      element.innerHTML = "";
      textArray.forEach((letter, i) => {
        setTimeout(() => (element.innerHTML += letter), 75 * i);
      });
    },
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

h1::after {
  content: "|";
  opacity: 1;
  margin-left: 5px;
  display: inline-block;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
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
