<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <user-profile :fetchUser="fetchItem">
        <!-- <div slot="username">{{ fetchItem.user }}</div> -->
        <router-link slot="username" :to="`/user/${fetchItem.user}`">{{ fetchItem.user }}</router-link>
        <template slot="time">{{'posted from ' + fetchItem.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchItem.title }}</h2>
    </section>
    <section>
      <div v-html="fetchItem.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(["fetchItem", "fetchUser"]),
  },
  created() {
    // console.log(this.$route);
    const item = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", item);
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>