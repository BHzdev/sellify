<template>
  <div>
    <p>Páginas {{ totalPages }}</p>
    <ul>
      <li v-for="page in totalPages" :key="page">
        <router-link :to="{ query: query(page) }">{{ page }}</router-link>
      </li>
    </ul>
  </div>
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

<style></style>
