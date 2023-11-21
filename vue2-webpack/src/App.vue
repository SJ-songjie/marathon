<script>
export default {
  name: "App",
  created() {
    console.log(process.env.NODE_ENV);
    console.log(process.env.API_URL);
  },
};
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
