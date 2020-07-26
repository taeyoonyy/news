<template>
  <div>
    <ul class="news-list">
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
    </ul>
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

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center; /* flex item의 교차축을 정렬 */
  justify-content: center; /* flex item의  ‘진행 축’ 정렬과 아이템 사이의 간격을 제어합니다 */
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
