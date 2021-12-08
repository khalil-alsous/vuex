const likeModules = {
  namespaced: true,
  state: {
    likeCase: false,
    likes: 10,
  },
  getters: {
    // rootstate let us Access to the store and get data from his state(root state)
    likeCase(state, getters, rootstate) {
      console.log(rootstate);
      return state.likeCase;
    },
    likes(state) {
      return state.likes;
    },
  },
  mutations: {
    toggleLikeCase(state) {
      state.likeCase = !state.likeCase;
    },
    increaseLike(state) {
      state.likes += 1;
    },
    decreaseLike(state) {
      state.likes -= 1;
    },
  },
  actions: {
    toggleLikeCase({ commit, state }) {
      commit("toggleLikeCase");
      if (state.likeCase) commit("increaseLike");
      else commit("decreaseLike");
    },
  },
};

export default likeModules;
