<template>
  <div class="grey darken-1 empty-layout">
    <router-view></router-view>
  </div>
</template>

<script>
import messages from "@/utils/messages.js";
export default {
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error(fbError) {
      console.log(fbError);
      this.$error(
        messages[fbError.code] ||
          messages[fbError.code] ||
          messages[fbError.code] ||
          "Something wrong"
      );
    }
  }
};
</script>

<style lang="scss" scoped></style>
