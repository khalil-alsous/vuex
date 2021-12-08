const getters = {
  // First Way To Used Getters
  doneTasks: (state) => {
    return state.tasks.filter((task) => task.done);
  },

  // Getter Depends On Other Getter
  doneTasksLength: (state, getters) => {
    return getters.doneTasks.length;
  },

  // Getter With Param (Can Not Contain In mapGetters)
  plusTwo: (state) => (num) => {
    return state.number + num;
  },
};
export default getters;
