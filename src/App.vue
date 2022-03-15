<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

body {
  font-weight: 400;
  line-height: 1.9;
}
html,
body {
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}
</style>
