<template>
  <ul>
    <li v-for="page in totalPages" :key="page">
      <router-link :to="{ query: query(page) }">{{ page }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    productsPerPage: {
      type: Number,
      default: 1,
    },
    productsTotal: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    query(page) {
      return {
        ...this.$route.query,
        _page: page,
      };
    },
  },
  computed: {
    totalPages() {
      const total = this.productsTotal / this.productsPerPage;
      return total !== Infinity ? Math.ceil(total) : 0;
    },
  },
};
</script>

<style scoped>
ul {
  grid-column: 1 / -1;
}

li {
  display: inline-block;
}

li a {
  padding: 4px 12px;
  border-radius: 4px;
  margin: 4px;
}

li a.router-link-exact-active,
li a:hover {
  background: #833cdd;
  color: #fff;
}
</style>
