<template>
  <div>
    <h1>This Is Actions Page</h1>
    <h1>{{ counter }}</h1>
    <button @click="increment_A">+</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "actions",
  computed: mapState(["counter"]),

  methods: {
    // with mapActions
    ...mapActions(["increment_A"]),

    // Deal With It Directly (use Method Name Not Action Name)
    increment_Action() {
      this.$store.dispatch("increment_A");
    },
  },
};
</script>
