<template>
  <v-snackbar
    v-model="$store.state.snackbar.show"
    class="snackbar-global"
    rounded="pill"
    top
    :color="$store.state.snackbar.color"
    right
  >
    {{ $store.state.snackbar.text }}
  </v-snackbar>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SnackbarGLobal",
  data() {
    return {};
  },
  computed: {
    ...mapState(["snackbar"]),
  },
  methods: {
    closeSnackbar() {
      this.$store.dispatch("snackbar/closeSnackbar");
    },
  },
};
</script>

<style>
/* .snackbar-global > :first-child {
  box-shadow: 0px 0px 5px #787878 !important;
  border: none !important;
}
.snackbar-global > :first-child > :first-child {
  font-weight: 600 !important;
} */
</style>
