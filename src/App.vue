<template>
  <div id="app">
    <TheHeader />
    <main id="main">
      <transition mode="out-in">
        <router-view />
      </transition>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
import { api } from "@/services";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  created() {
    if (window.localStorage.token) {
      api
        .validateToken()
        .then(() => {
          this.$store.dispatch("getUser");
        })
        .catch(() => {
          window.localStorage.removeItem("token");
        });
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
  padding: 0px;
  margin: 0px;
}

ul {
  list-style: none;
}

body {
  font-family: "Inter", sans-serif;
  color: #29292e;
}

a {
  color: #0e0e11;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main {
  flex: 1;
}

.btn {
  display: block;
  padding: 12px 24px;
  border-radius: 4px;
  background: #701cda;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  box-shadow: 0 4px 8px rgba(156, 93, 150, 0.2);
  transition: all 0.3s;
  border: none;
  cursor: pointer;
}

.btn:hover {
  background: #5c0fbd;
  transform: scale(1.1);
}

input,
textarea {
  border-radius: 8px;
  border: 1px solid white;
  padding: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  width: 100%;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
  outline: none;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  border-color: #701cda;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave-to {
  transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
