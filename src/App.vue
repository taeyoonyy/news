<template>
  <div>
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import Spinner from "./components/Spinner.vue";
import bus from "./utils/bus.js";
export default {
  data() {
    return {
      loadingStatus: false,
    };
  },
  created() {
    // bus.$on("start:spinner", () => (this.loadingStatus = true));
    bus.$on("start:spinner", this.startSpinner);
    bus.$on("end:spinner", this.stopSpinner);
  },
  beforeDestroy() {
    bus.off("start:spinner", this.startSpinner);
    bus.$off("end:spinner", this.stopSpinner);
  },
  components: {
    ToolBar,
    Spinner,
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    stopSpinner() {
      this.loadingStatus = false;
    },
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: #34495e;
}
a:hover {
  color: #42b883;
}
a.router-link-exact-active {
  text-decoration: underline;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>