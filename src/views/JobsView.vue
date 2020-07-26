<template>
  <div>
    <p v-for="job in this.$store.state.jobs" :key="job.index">
      <a :href="job.url">{{ job.title}}</a>
      <small>{{ job.time_ago }} by {{ job.domain }}</small>
    </p>
  </div>
</template>

<script>
// import { fetchJobsList } from '../api/index.js';
export default {
  // data() {
  //   return {
  //     users: [],
  //   };
  // },
  created() {
    this.$store.dispatch("FETCH_JOBS");
    // fetchJobsList()
    //   .then((response) => (this.users = response.data))
    //   .catch((error) => console.log(error));
  },
};
</script>

<style></style>
