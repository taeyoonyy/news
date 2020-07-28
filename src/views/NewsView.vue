<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
export default {
  components: {
    ListItem,
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
