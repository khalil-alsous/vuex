import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import likeModules from "./modules/likeModule";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 10,
    name: "khalil",
    students: [
      { name: "khalil", age: 43 },
      { name: "Ahmed", age: 31 },
      { name: "Nada", age: 22 },
    ],
    tasks: [
      { id: "1", done: true },
      { id: "2", done: false },
      { id: "3", done: true },
    ],
    number: 4,
  },

  // can Print Result On Console Or In Page By computed Function Or mapGetters
  getters: getters,

  mutations: mutations,

  // It Is Deal With Mutations
  actions: actions,

  modules: {
    Like: likeModules,
  },
});

export default store;
// console.log(store.doneTasks);
