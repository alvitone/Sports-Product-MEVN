<template>
  <div id="app">
    <NavBar />
    <router-view /> <!-- Displays the current route's component -->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif;
}
</style>
