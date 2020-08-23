<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="item in fetchAsk" :key="item.index" class="post">
        <div class="points">{{ item.points }}</div>
        <div>
          <p class="news-title">
            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>-->
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus.js";
// import { mapGetters } from "vuex";
export default {
  components: {
    ListItem,
  },
  // computed: {
  //   ...mapGetters(["fetchAsk"]),
  // },
  created() {
    bus.$emit("start:spinner");
    setTimeout(() => {
      this.$store.dispatch("FETCH_ASK")
      .then(() => {
        console.log("end:spinner");
        bus.$emit("end:spinner");
      })
      .catch((error) => {
        console.log(error)
      })
    },3000)
  },
};
</script>

<style scoped>
</style>
