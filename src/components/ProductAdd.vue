<template>
  <form class="add-product">
    <label for="nome">Nome</label>
    <input id="nome" name="nome" type="text" v-model="produto.nome" />
    <label for="preco">Preço</label>
    <input id="preco" name="preco" type="number" v-model="produto.preco" />
    <label for="fotos">Fotos</label>
    <input id="fotos" name="fotos" type="file" ref="fotos" />
    <label for="preco">Descrição</label>
    <textarea id="preco" name="preco" v-model="produto.descricao"></textarea>
    <input
      class="btn"
      type="button"
      value="Adicionar Produto"
      @click.prevent="addProduct"
    />
  </form>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "ProductAdd",
  data() {
    return {
      produto: {
        nome: "",
        preco: "",
        descricao: "",
        fotos: null,
      },
    };
  },
  methods: {
    formatProduct() {
      this.produto.usuario_id = this.$store.state.usuario.id;
    },
    addProduct() {
      this.formatProduct();
      api.post("/produto", this.produto).then(() => {
        this.$store.dispatch("getUserProducts");
      });
    },
  },
};
</script>

<style scoped>
.add-product {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  gap: 20px;
  margin: 32px 0;
}

.btn {
  grid-column: 2;
}

textarea {
  font-family: "Inter", sans-serif;
}
</style>
