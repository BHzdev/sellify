import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";
import LoginView from "../views/LoginView.vue";
import UserView from "../views/user/UserView";
import UserProductsView from "../views/user/UserProductsView";
import UserPurchasesView from "../views/user/UserPurchasesView";
import UserSalesView from "../views/user/UserSalesView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/produto/:id",
    name: "produto",
    component: ProductView,
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/usuario",
    component: UserView,
    children: [
      {
        path: "",
        name: "usuario",
        component: UserProductsView,
      },
      {
        path: "compras",
        name: "compras",
        component: UserPurchasesView,
      },
      {
        path: "vendas",
        name: "vendas",
        component: UserSalesView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
