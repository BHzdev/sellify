<template>
  <section class="user">
    <nav class="sidenav">
      <ul>
        <li><router-link :to="{ name: 'usuario' }">Produtos</router-link></li>
      </ul>
      <ul>
        <li><router-link :to="{ name: 'compras' }">Compras</router-link></li>
      </ul>
      <ul>
        <li><router-link :to="{ name: 'vendas' }">Vendas</router-link></li>
      </ul>
      <ul>
        <li><button @click.prevent="logOut">Sair</button></li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: "UserView",
  methods: {
    logOut() {
      this.$store.dispatch("logOutUser");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped></style>
