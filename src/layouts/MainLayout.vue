<template>
  <div>
    <Loader v-if="loading"></Loader>
    <div v-else>
      <div class="app-main-layout">
        <Navbar @click="isOpen = !isOpen"></Navbar>
        <Sidebar v-model="isOpen"></Sidebar>
        <main class="app-content" :class="{ full: !isOpen }">
          <div class="app-page">
            <router-view></router-view>
          </div>
        </main>

        <div class="fixed-action-btn">
          <router-link class="btn-floating btn-large blue" to="/record">
            <i class="large material-icons">add</i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar.vue";
import Sidebar from "@/components/app/Sidebar.vue";
export default {
  data() {
    return {
      isOpen: true,
      loading: true
    };
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }
    this.loading = false;
  },
  components: {
    Navbar,
    Sidebar
  }
};
</script>
