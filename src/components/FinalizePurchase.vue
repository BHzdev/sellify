<template>
  <section>
    <h2>Endereço de Envio</h2>
    <UserForm>
      <button class="btn" @click.prevent="finalizePurchase">Comprar</button>
      <ErrorNotification :errors="errors" />
    </UserForm>
  </section>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import { api } from "@/services.js";
import { mapState } from "vuex";

export default {
  name: "FinalizePurchase",
  components: {
    UserForm,
  },
  props: ["produto"],
  data() {
    return {
      errors: [],
    };
  },
  computed: {
    ...mapState(["usuario"]),
    purchase() {
      return {
        comprador_id: this.usuario.email,
        vendedor_id: this.produto.usuario_id,
        produto: this.produto,
        endereco: {
          cep: this.usuario.cep,
          estado: this.usuario.estado,
          cidade: this.usuario.cidade,
          bairro: this.usuario.bairro,
          rua: this.usuario.rua,
          numero: this.usuario.numero,
        },
      };
    },
  },
  methods: {
    createTransaction() {
      return api.post("/transacao", this.purchase).then(() => {
        this.$router.push({ name: "compras" });
      });
    },
    async createUser() {
      try {
        await this.$store.dispatch("createUser", this.$store.state.usuario);
        await this.$store.dispatch("loginUser", this.$store.state.usuario);
        await this.$store.dispatch("getUser");
        await this.createTransaction();
      } catch (error) {
        this.errors.push(error.response.data.message);
      }
    },
    finalizePurchase() {
      this.errors = [];
      if (this.$store.state.login) {
        this.createTransaction();
      } else {
        this.createUser();
      }
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 16px;
}

@media (max-width: 400px) {
  .btn {
    margin: 0 auto;
  }
}
</style>
