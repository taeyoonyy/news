<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus.js";
export default {
  components: {
    ListItem,
  },
  created() {
    bus.$emit("start:spinner");
    setTimeout(() => {
      this.$store.dispatch("FETCH_NEWS")
      .then((response) => {
        console.log("end:spinner");
        console.log(response)
        bus.$emit("end:spinner");
      })
      .catch((error) => {
        console.log(error)
      })
    },3000)
  },

  // async created() {
  //   const result = await fetchNewsList();
  //   this.users = result.data;
  //   this.$store.emit('news', result.data);
  // },
};
</script>

<style >
</style>
