<template>
  <div class="py-10 my-4 flex flex-row justify-center gap-x-2 bg-red-400">
    <RouterLink class="router-link-style" to="/">Home </RouterLink>
    <RouterLink class="router-link-style" to="/portraits"
      >Portraits
    </RouterLink>
    <RouterLink class="router-link-style" to="/sofia">Sofia</RouterLink>
    <RouterLink class="router-link-style" to="/mom">Mom</RouterLink>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
