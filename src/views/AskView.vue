<template>
  <div>
    <p v-for="item in fetchAsk" :key="item.index">
      <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
      <!-- <a :href="item.url">{{ item.title }}</a> -->
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
// import { fetchAskList } from '../api/index.js';
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchAsk"]),

    // ...mapState({
    //   ask11: (state) => state.ask,
    // }),
    // ask() {
    //   return this.$store.state.ask;
    // },
  },
  // data() {
  //   return {
  //     ask: [],
  //   };
  // },
  created() {
    this.$store.dispatch("FETCH_ASK");

    // fetchAskList()
    //   .then((response) => (this.ask = response.data))
    //   .catch((error) => console.log(error));
  },
};
</script>

<style></style>
