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

<style scoped>
.user {
  display: grid;
  grid-template-columns: 200px 1fr;
  max-width: 900px;
  margin: 20px auto;
  gap: 20px;
  padding: 20px;
}

.sidenav a,
.sidenav button {
  padding: 16px;
  display: block;
  background: #f4f4f4;
  margin-bottom: 16px;
  border-radius: 4px;
}

.sidenav a.router-link-exact-active,
.sidenav a:hover,
.sidenav button:hover {
  background: #701cda;
  color: white;
}

.sidenav button {
  border: none;
  width: 100%;
  font-size: 1rem;
  font-family: "Inter", sans-serif;
  text-align: left;
  cursor: pointer;
}

@media screen and (max-width: 500px) {
  .user {
    grid-template-columns: 1fr;
  }
}
</style>
