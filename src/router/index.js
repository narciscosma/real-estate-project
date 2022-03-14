import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/houses",
    name: "houses",
    component: () =>
      import(/* webpackChunkName: "houses" */ "../views/HousesView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
