<template>
  <div>
    <p v-for="item in this.$store.state.news" :key="item.index">
      <a :href="item.url">{{ item.title }}</a>
      <small>
        {{ item.time_ago }} by
        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_NEWS"); // vue components에서 action을 호출하는게 dispatch
  },
  // async created() {
  //   const result = await fetchNewsList();
  //   this.users = result.data;
  //   this.$store.emit('news', result.data);
  // },
};
</script>

<style></style>
