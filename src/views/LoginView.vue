<template>
  <section class="login">
    <h1>Login</h1>
    <form>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email" />
      <label for="senha">Senha</label>
      <input type="password" name="senha" id="senha" v-model="login.senha" />
      <button class="btn" @click.prevent="loginIn">Logar</button>
      <ErrorNotification :errors="errors" />
    </form>
    <p class="lost-password">
      <a
        href="http://localhost:10005/wp-login.php?action=lostpassword"
        target="_blank"
        >Esqueceu sua senha?</a
      >
    </p>
    <LoginCreate />
  </section>
</template>

<script>
import LoginCreate from "@/components/LoginCreate.vue";
export default {
  name: "LoginView",
  components: {
    LoginCreate,
  },
  data() {
    return {
      login: {
        email: "",
        senha: "",
      },
      errors: [],
    };
  },
  methods: {
    loginIn() {
      this.errors = [];
      this.$store
        .dispatch("loginUser", this.login)
        .then(() => {
          this.$store.dispatch("getUser");
          this.$router.push({ name: "usuario" });
        })
        .catch((error) => {
          this.errors.push(error.response.data.message);
        });
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  font-size: 2rem;
  text-align: center;
  color: #833cdd;
  margin: 40px 0 20px 0;
}

form {
  display: grid;
  gap: 8px;
}

form input {
  margin-bottom: 20px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

.lost-password {
  text-align: center;
  margin-top: 20px;
}

.lost-password a:hover {
  color: #833cdd;
  text-decoration: underline;
}
</style>
