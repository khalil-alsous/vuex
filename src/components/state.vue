<template>
  <div>
    <h1>{{ name }}</h1>
    <h1>{{ CountSum }}</h1>
    <hr />
    <table border="1px" style="margin: 20px auto 0">
      <tr>
        <td style="padding: 10px">Name</td>
        <td style="padding: 10px">Agr</td>
      </tr>
      <tr v-for="student in students" :key="student.name">
        <td style="padding: 10px">{{ student.name }}</td>
        <td style="padding: 10px">{{ student.age }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "state",
  data() {
    return {
      localCount: 3,
    };
  },

  // Old Way to get data from store (everyone single)
  // counter() {
  //   return this.$store.state.counter;
  // },
  // name() {
  //   return this.$store.state.name;
  // },
  // students() {
  //   return this.$store.state.students;
  // },

  // New Way to get data from store (All with each other)
  computed: {
    // mapState 1 way (Array Of String)
    // ...mapState(["counter", "name", "students"]),

    ...mapState({
      // mapState 2 way (Arrow Function)
      counter: (state) => state.counter,
      name: (state) => state.name,
      students: (state) => state.students,

      // mapState 3 way (Alias Name) And You Can Use It By Alias Name
      counterAlias: "counter",
      nameAlias: "name",
      studentsAlias: "students",

      // mapState 4 way (mix with data from this object)
      CountSum(state) {
        return state.counter + this.localCount;
      },
    }),
  },
};
</script>
