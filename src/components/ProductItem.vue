<template>
  <div class="product" v-if="product">
    <router-link
      class="product-img"
      :to="{ name: 'produto', params: { id: product.id } }"
    >
      <img
        v-if="product.fotos"
        :src="product.fotos[0].src"
        :alt="product.fotos[0].titulo"
      />
    </router-link>
    <div class="info">
      <p class="price">{{ product.preco | priceNumber }}</p>
      <h2 class="title">{{ product.nome }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: ["product"],
};
</script>

<style scoped>
.product {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 16px;
  margin-bottom: 20px;
}

.info {
  align-self: end;
  position: relative;
}

.product-img {
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
}

.price {
  color: #0da51d;
  font-weight: bold;
  font-size: 1.25rem;
}

.title {
  font-size: 1.5rem;
}
</style>
