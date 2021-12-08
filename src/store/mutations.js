const mutations = {
  // Normal Mutation
  inecrement(state) {
    return state.counter++;
  },
  decrement(state) {
    return state.counter--;
  },
  // Mutation with Param (Num Or Object)
  inecrementByNum(state, Num) {
    return (state.counter += Num);
  },
  decrementByObj(state, payload) {
    return (state.counter -= payload.amount);
  },

  // For Actions
  increment_Action(state) {
    return state.counter++;
  },
};
export default mutations;
