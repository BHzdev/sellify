<template>
  <form>
    <label for="nome">Nome</label>
    <input id="nome" name="nome" type="text" v-model="nome" />
    <label for="email">Email</label>
    <input id="email" name="email" type="email" v-model="email" />
    <label for="senha">Senha</label>
    <input id="senha" name="senha" type="password" v-model="senha" />
    <label for="estado">Estado</label>
    <input id="estado" name="estado" type="text" v-model="estado" />
    <label for="cidade">Cidade</label>
    <input id="cidade" name="cidade" type="text" v-model="cidade" />
    <label for="cep">Cep</label>
    <input id="cep" name="cep" type="text" v-model="cep" />
    <label for="bairro">Bairro</label>
    <input id="bairro" name="bairro" type="text" v-model="bairro" />
    <label for="rua">Rua</label>
    <input id="rua" name="rua" type="text" v-model="rua" />
    <label for="numero">Numero</label>
    <input id="numero" name="numero" type="text" v-model="numero" />
    <div>
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers";

export default {
  name: "UserForm",
  computed: {
    ...mapFields({
      fields: [
        "nome",
        "email",
        "senha",
        "rua",
        "cep",
        "numero",
        "bairro",
        "cidade",
        "estado",
      ],
      base: "usuario",
      mutation: "UPDATE_USUARIO",
    }),
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

form input {
  margin-bottom: 8px;
}

.btn {
  max-width: 300px;
}
</style>
