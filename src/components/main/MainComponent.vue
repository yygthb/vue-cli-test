<template>
  <main class="main">
    <div class="container">
      <div class="main__container">
        <slot></slot>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style lang="scss" scoped>
.main {
  margin: 20px 0;
}
</style>
