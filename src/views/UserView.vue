<template>
  <div>
    <h1>USER</h1>
    <p>name: {{ fetchUser.id}}</p>
    <p>karma: {{ fetchUser.karma}}</p>
    <p>created: {{ fetchUser.created}}</p>
    <!-- <p v-for="item in fetchUser" :key="item.index">{{ item }}</p> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchUser"]),
  },
  created() {
    const user = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", user); // vue components에서 action을 호출하는게 dispatch
  },
};
</script>

<style>
</style>