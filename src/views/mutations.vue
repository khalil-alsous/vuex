<template>
  <div>
    <h1>This Is Mutations Page</h1>
    <div>
      <button @click="decrement">-</button>
      {{ counter }}
      <button @click="inecrement">+</button>
    </div>
    <hr />
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "mutations",
  computed: {
    ...mapState(["counter"]),
  },

  // Mutations With No Params
  methods: {
    ...mapMutations(["inecrement", "decrement"]),

    // mutations With Params
    inecrementByNum() {
      this.$store.commit("inecrementByNum", 10);
    },

    decrementByObj() {
      this.$store.commit("decrementByObj", {
        amount: 10,
      });
    },

    // Other Way To Declaration Mutation By Obj
    // decrementByObj() {
    //   this.$store.commit({
    //     type: "decrementByObj",
    //     amount: 10,
    //   });
    // },
  },
};
</script>
