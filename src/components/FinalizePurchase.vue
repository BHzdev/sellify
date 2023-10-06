<template>
  <section>
    <h2>Endereço de Envio</h2>
    <UserForm>
      <button class="btn" @click.prevent="finalizePurchase">Comprar</button>
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
  computed: {
    ...mapState(["usuario"]),
    purchase() {
      return {
        comprador_id: this.usuario.email,
        vendedor_id: this.produto.usuario_id,
        produto: this.produto,
        endereco: {
          estado: this.usuario.estado,
          cidade: this.usuario.cidade,
          bairro: this.usuario.bairro,
          cep: this.usuario.cep,
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
        await this.$store.dispatch("getUser", this.$store.state.usuario.email);
        await this.createTransaction();
      } catch (error) {
        console.log(error);
      }
    },
    finalizePurchase() {
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
