<template>
  <div>
    <user-profile :fetchUser="fetchUser">
      <div slot="username">{{ fetchUser.id }}</div>
      <span slot="time">{{'joined ' + fetchUser.created + ', '}}</span>
      <span slot="karma">{{ fetchUser.karma }}</span>
    </user-profile>
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