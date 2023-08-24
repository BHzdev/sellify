<template>
  <form>
    <input
      name="search"
      id="search"
      type="text"
      v-model="search"
      placeholder="Buscar..."
    />
    <input type="submit" id="lupa" value="" @click.prevent="searchProducts" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      busca: "",
    };
  },
  methods: {
    searchProducts() {
      this.$router.push({ query: { q: this.search } });
    },
  },
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 60px auto 0 auto;
  position: relative;
}

#search {
  width: 100%;
  padding: 20px;
  border: none;
}

#search:focus,
#search:hover {
  outline: none;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
}

#lupa {
  width: 62px;
  height: 62px;
  background: url("../assets/search.svg") no-repeat center center;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  box-shadow: none;
}

@media (max-width: 762px) {
  form {
    max-width: 400px;
  }
}

@media (max-width: 450px) {
  form {
    max-width: 250px;
  }
}
</style>
