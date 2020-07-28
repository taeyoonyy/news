<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" :key="job.index" class="post">
        <div class="points">{{ job.points }}</div>
        <div>
          <p class="news-title">
            <a :href="job.url">{{ job.title}}</a>
          </p>
          <small>
            {{ job.time_ago }} by
            <a :href="job.url">{{ job.domain }}</a>
          </small>
        </div>
      </li>
    </ul>-->
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
// import { fetchJobsList } from '../api/index.js';
export default {
  components: {
    ListItem,
  },
  // // data() {
  // //   return {
  // //     users: [],
  // //   };
  // // },
  // created() {
  //   this.$store.dispatch("FETCH_JOBS");
  //   // fetchJobsList()
  //   //   .then((response) => (this.users = response.data))
  //   //   .catch((error) => console.log(error));
  // },
};
</script>

