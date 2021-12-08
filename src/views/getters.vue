<template>
  <div>
    <h1>This Is Getters Page</h1>
    <hr />
    <ul>
      <li v-for="task in doneTasks" :key="task.id">
        {{ task.id }} | {{ task.done }}
      </li>
    </ul>
    <hr />
    <h1>{{ doneTasksLength }}</h1>
    <!-- <h1>{{ plusTwo }}</h1> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "getters",
  computed: {
    ...mapGetters(["doneTasks", "doneTasksLength"]),
    // plusTwo() {
    //   return this.$store.getters.plusTwo(3);
    // },
  },
};
</script>
