<template>
  <footer><p>SELLIFY - 2023 Todos os direitos reservados ©️</p></footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style>
footer {
  padding: 25px 0;
  background: #701cda;
  font-size: 1.25rem;
  text-align: center;
  color: #fff;
  position: relative;
  top: 75px;
}

@media (max-width: 450px) {
  footer {
    font-size: 1rem;
  }
}
</style>
