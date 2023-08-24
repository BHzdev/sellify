<template>
  <div id="app">
    <TheHeader />
    <main id="main">
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter,
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
  font-family: Helvetica, Arial, sans-serif;
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
  padding: 16px 24px;
  border-radius: 4px;
  background: #701cda;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  box-shadow: 0 4px 8px rgba(161, 17, 147, 0.2);
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
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: 15px;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
  outline: none;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  border-color: #701cda;
}
</style>
