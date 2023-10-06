<template>
  <section>
    <h2>Adicionar Produto</h2>
    <ProductAdd />
    <h2>Seus Produtos</h2>
    <transition-group v-if="usuario_produtos" name="list" tag="ul">
      <li v-for="(product, index) in usuario_produtos" :key="index">
        <ProductItem :product="product">
          <p>{{ product.descricao }}</p>
          <button class="delete" @click="delectProduct(product.id)">
            Deletar
          </button>
        </ProductItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import { api } from "@/services.js";
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
    delectProduct(id) {
      const confirmar = window.confirm(
        "Tem certeza de que deseja excluir este produto? A ação é irreversível. Clique em 'OK' para excluir ou em 'Cancelar' para manter o produto."
      );
      if (confirmar) {
        api.delete(`/produto/${id}`).then(() => {
          this.getUserProducts();
        });
      }
    },
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

.delete {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 24px;
  height: 24px;
  background: url("../../assets/remove.svg") no-repeat center center;
  text-indent: -100px;
  overflow: hidden;
  cursor: pointer;
  border: none;
}
</style>
