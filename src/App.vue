<template>
  <div class="app">
    <h1 class="app__title">APP CONTENT</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import "./styles/index.scss";

.app {
  background-color: lightblue;

  &__title {
    color: #fff;
  }
}
</style>
