import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import index from "../pages/index.vue";
import Details from "../pages/Details.vue";
import Shop from "../pages/Shop.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Cart from "../pages/Cart.vue";

import DefaultLayout from "../components/DefaultLayout.vue";
import Checkout from "../pages/Checkout.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    component: DefaultLayout,
    children: [
      {
        path: "/home",
        name: "home",
        component: index,
      },
      {
        path: "/shops",
        name: "shops",
        component: Shop,
      },
      {
        path: "/login",
        name: "login",
        component: Login,
      },
      {
        path: "/register",
        name: "register",
        component: Register,
      },
      {
        path: "/cart",
        name: "cart",
        component: Cart,
      },
      {
        path: "/details/:id",
        name: "details",
        component: Details,
      },
      {
        path: "/:catchAll(.*)",
        redirect: () => {
          return { name: "home" };
        },
      },
    ],
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
  },
];
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
