<template>
  <form class="add-product">
    <label for="nome">Nome</label>
    <input id="nome" name="nome" type="text" v-model="produto.nome" />
    <label for="preco">Preço</label>
    <input id="preco" name="preco" type="number" v-model="produto.preco" />
    <label for="fotos">Fotos (min: 200x200)</label>
    <input id="fotos" name="fotos" type="file" ref="fotos" multiple />
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
        vendido: false,
      },
    };
  },
  methods: {
    formatProduct() {
      const form = new FormData();

      const files = this.$refs.fotos.files;
      console.log(files);
      for (let i = 0; i < files.length; i++) {
        form.append(files[i].name, files[i]);
      }

      form.append("nome", this.produto.nome);
      form.append("preco", this.produto.preco);
      form.append("descricao", this.produto.descricao);
      form.append("vendido", this.produto.vendido);
      form.append("usuario_id", this.$store.state.usuario.id);

      return form;
    },
    addProduct() {
      const produto = this.formatProduct();
      api.post("/produto", produto).then(() => {
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
