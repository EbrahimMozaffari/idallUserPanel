<template>

 <v-app :key="$route.fullPath">

  <router-view></router-view>
  </v-app>

  
</template>

<script>
export default {
  name: 'App',
 
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>
