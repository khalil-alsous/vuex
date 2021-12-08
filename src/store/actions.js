const actions = {
  increment_A({ commit }) {
    setTimeout(() => {
      commit("increment_Action"); // increment_Action Is A Mutation
    }, 1000);
  },
};
export default actions;
