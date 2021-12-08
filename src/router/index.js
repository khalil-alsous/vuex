import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import state from "../views/state.vue";
import getters from "../views/getters.vue";
import mutations from "../views/mutations.vue";
import actions from "../views/actions.vue";
import modules from "../views/modules.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/state",
    name: "state",
    component: state,
  },
  {
    path: "/getters",
    name: "getters",
    component: getters,
  },
  {
    path: "/mutations",
    name: "mutations",
    component: mutations,
  },
  {
    path: "/actions",
    name: "actions",
    component: actions,
  },
  {
    path: "/modules",
    name: "modules",
    component: modules,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
