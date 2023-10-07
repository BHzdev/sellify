import { api } from "@/services";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    usuario: {
      id: "",
      nome: "",
      email: "",
      senha: "",
      estado: "",
      cidade: "",
      cep: "",
      bairro: "",
      rua: "",
      numero: "",
    },
    usuario_produtos: null,
  },
  getters: {},
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.usuario = Object.assign(state.usuario, payload);
    },
    UPDATE_USER_PRODUCTS(state, payload) {
      state.usuario_produtos = payload;
    },
    ADD_USER_PRODUCTS(state, payload) {
      state.usuario_produtos.unshift(payload);
    },
  },
  actions: {
    getUser(context) {
      return api.get(`/usuario`).then((response) => {
        context.commit("UPDATE_USER", response.data);
        context.commit("UPDATE_LOGIN", true);
      });
    },
    getUserProducts(context) {
      api
        .get(`/produto?usuario_id=${context.state.usuario.id}`)
        .then((response) => {
          context.commit("UPDATE_USER_PRODUCTS", response.data);
        });
    },
    createUser(context, payload) {
      context.commit("UPDATE_USER", { id: payload.email });
      return api.post("/usuario", payload);
    },
    loginUser(context, payload) {
      return api
        .login({
          username: payload.email,
          password: payload.senha,
        })
        .then((response) => {
          window.localStorage.token = `Bearer ${response.data.token}`;
        });
    },
    logOutUser(context) {
      context.commit("UPDATE_USER", {
        id: "",
        nome: "",
        email: "",
        senha: "",
        estado: "",
        cidade: "",
        cep: "",
        bairro: "",
        rua: "",
        numero: "",
      });
      window.localStorage.removeItem("token");
      context.commit("UPDATE_LOGIN", false);
    },
  },
  modules: {},
});
