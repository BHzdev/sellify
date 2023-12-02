<template>
  <section class="user">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{ name: 'usuario' }"
            ><img
              width="24"
              height="24"
              src="@/assets/products.svg"
              alt=""
            />Produtos</router-link
          >
        </li>
      </ul>
      <ul>
        <li>
          <router-link :to="{ name: 'compras' }"
            ><img
              width="24"
              height="24"
              src="@/assets/buy.svg"
              alt=""
            />Compras</router-link
          >
        </li>
      </ul>
      <ul>
        <li>
          <router-link :to="{ name: 'vendas' }"
            ><img
              width="24"
              height="24"
              src="@/assets/sell.svg"
              alt=""
            />Vendas</router-link
          >
        </li>
      </ul>
      <ul>
        <li>
          <button @click.prevent="logOut">
            <img width="24" height="24" src="@/assets/logout.svg" alt="" />Sair
          </button>
        </li>
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
  created() {
    document.title = "Usuário";
  },
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
  grid-template-columns: 250px 1fr;
  max-width: 900px;
  margin: 20px auto;
  gap: 20px;
  padding: 20px;
}

.sidenav {
  padding: 20px;
  border-right: 2px solid rgba(0, 0, 0, 0.1);
}

.sidenav a,
.sidenav button {
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
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
  background: white;
}

@media screen and (max-width: 728px) {
  .user {
    grid-template-columns: 1fr;
    margin: 0 auto;
  }
  .sidenav {
    padding: 16px;
    border-right: none;
    border-bottom: 2px solid #e0e0e0;
  }
}
</style>
