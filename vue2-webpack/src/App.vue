<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    console.log(process.env.NODE_ENV);
    console.log(process.env.API_URL);
  },
};
</script>
