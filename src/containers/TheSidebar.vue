<template>
  <CSidebar
    fixed
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.dispatch('app/set', ['sidebarShow', value])"
  >
  <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>

    <CSidebarBrand class="d-md-down-none" to="/">
      <CIcon
        class="c-sidebar-brand-full"
        name="logo"
        size="custom-size"
        :height="35"
        viewBox="0 0 556 134"
      />
      <CIcon
        class="c-sidebar-brand-minimized"
        name="logo"
        size="custom-size"
        :height="35"
        viewBox="0 0 110 134"
      />
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="$options.nav" />
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.dispatch('app/set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import nav from "./_nav";

export default {
  name: "TheSidebar",
  nav,
  computed: {
    show() {
      return this.$store.state.app.sidebarShow;
    },
    minimize() {
      return this.$store.state.app.sidebarMinimize;
    },
    overlay(){
      return this.$store.state.app.overlay;
    }
  },
  //  data: () => ({
  //     overlay: false,
  //   }),

  //   watch: {
  //     overlay (val) {
  //       val && setTimeout(() => {
  //         this.overlay = false
  //       }, 3000)
  //     },
  //   },
};
</script>
