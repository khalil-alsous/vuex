<template>
  <div>
    <button v-if="likeCase" @click="toggleLikeCase"><b>UnLike</b></button>
    <button v-if="!likeCase" @click="toggleLikeCase"><b>Like</b></button>
    <h1>Like Count : {{ likes }}</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "like",
  computed: {
    // Like : That Is The Name Of Modules (for Name Spaces)
    // Name Spaced Used When You Dont Want The Data Mix From Store And Modules If The Name Was Similar
    ...mapGetters("Like", ["likeCase", "likes"]),
  },
  methods: {
    ...mapActions("Like", ["toggleLikeCase"]),

    // Other Way With NameSpaced
    // toggleLikeCase() {
    //   this.$store.dispatch("Like/toggleLikeCase");
    // },
  },
};
</script>
<style lang="scss" scoped>
button {
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
}
</style>
