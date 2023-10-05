<template>
  <section>
    <h2>Adicionar Produto</h2>
    <ProductAdd />
    <h2>Seus Produtos</h2>
    <transition-group v-if="usuario_produtos" name="list" tag="ul">
      <li v-for="(product, index) in usuario_produtos" :key="index">
        <ProductItem :product="product">
          <p>{{ product.descricao }}</p>
        </ProductItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import ProductAdd from "@/components/ProductAdd.vue";
import ProductItem from "@/components/ProductItem.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "UserProductsView",
  components: {
    ProductAdd,
    ProductItem,
  },
  computed: {
    ...mapState(["login", "usuario", "usuario_produtos"]),
  },
  methods: {
    ...mapActions(["getUserProducts"]),
  },
  watch: {
    login() {
      this.getUserProducts();
    },
  },
  created() {
    if (this.login) {
      this.getUserProducts();
    }
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 32px;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}
</style>
