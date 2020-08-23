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
import bus from "../utils/bus.js";
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
  created() {
    bus.$emit("start:spinner");
    setTimeout(() => {
      this.$store.dispatch("FETCH_JOBS")
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
};
</script>

