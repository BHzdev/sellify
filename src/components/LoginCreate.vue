<template>
  <section>
    <h2>Cadastre-se</h2>
    <p>
      Ao criar uma conta você concorda com todos os nossos
      <span>termos e condições</span>.
    </p>
    <transition mode="out-in">
      <button v-if="!criar" class="btn" @click="criar = true">
        Criar Conta
      </button>
      <UserForm v-else>
        <button class="btn" @click.prevent="createUser">
          Cadastrar Usuário
        </button>
        <ErrorNotification :errors="errors" />
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
      errors: [],
    };
  },
  methods: {
    async createUser() {
      this.errors = [];
      try {
        await this.$store.dispatch("createUser", this.$store.state.usuario);
        await this.$store.dispatch("loginUser", this.$store.state.usuario);
        await this.$store.dispatch("getUser");
        this.$router.push({ name: "usuario" });
      } catch (error) {
        this.errors.push(error.response.data.message);
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

p {
  text-align: center;
  margin-bottom: 16px;
  color: #666;
}

p span {
  color: blue;
  text-decoration: underline;
}

p span:hover {
  cursor: pointer;
}

.btn {
  margin: 0 auto;
  width: 100%;
}
</style>
