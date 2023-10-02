<template>
  <section>
    <h2>Cadastre-se</h2>
    <transition mode="out-in">
      <button v-if="!criar" class="btn" @click="criar = true">
        Criar Conta
      </button>
      <UserForm v-else>
        <button class="btn" @click.prevent="createUser">
          Cadastrar Usuário
        </button>
      </UserForm>
    </transition>
  </section>
</template>

<script>
import UserForm from "@/components/UserForm.vue";

export default {
  name: "LoginCreate",
  components: {
    UserForm,
  },
  data() {
    return {
      criar: false,
    };
  },
  methods: {
    async createUser() {
      try {
        await this.$store.dispatch("createUser", this.$store.state.usuario);
        await this.$store.dispatch("getUser", this.$store.state.usuario.email);
        this.$router.push({ name: "usuario" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 2rem;
  text-align: center;
  color: #833cdd;
  margin: 40px 0 20px 0;
}

.btn {
  margin: 0 auto;
  width: 100%;
}
</style>
