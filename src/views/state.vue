<template>
  <div>
    <h1>this is state page</h1>
    <hr />
    <State />
  </div>
</template>

<script>
// @ is an alias to /src
import State from "@/components/state";
export default {
  name: "state",
  components: {
    State,
  },
};
</script>
