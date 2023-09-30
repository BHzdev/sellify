<template>
  <section>
    <h2>Cadastre-se</h2>
    <transition mode="out-in">
      <button v-if="!criar" class="btn" @click="criar = true">
        Criar Conta
      </button>
      <UserForm v-else>
        <button class="btn">Cadastrar Usuário</button>
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
    };
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

.btn {
  margin: 0 auto;
  width: 100%;
}
</style>
