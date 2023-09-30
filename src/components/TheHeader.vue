<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img width="80px" height="60px" src="@/assets/logo.svg" alt="" />
      </router-link>
      <router-link v-if="$store.state.login" class="btn" to="/usuario">{{
        getUserName
      }}</router-link>
      <router-link v-else class="btn" to="/login"
        >Login / Criar Conta</router-link
      >
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  computed: {
    getUserName() {
      return this.$store.state.usuario.nome.replace(/ .*/, "");
    },
  },
};
</script>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 16px 32px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media (max-width: 360px) {
  nav {
    justify-content: center;
    gap: 16px;
  }
}
</style>
