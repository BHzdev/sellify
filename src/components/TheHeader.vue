<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img width="80px" height="60px" src="@/assets/logo.svg" alt="" />
      </router-link>
      <router-link class="btn" to="/login">Login / Criar Conta</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
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
  }
}
</style>
