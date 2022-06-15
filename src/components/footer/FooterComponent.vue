<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__container">
        <p>FOOTER</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style lang="scss" scoped>
.footer {
  height: 100px;
  padding: 20px 0;
  border-top: 1px solid lighten($color-main, 30%);

  &__container {
    text-align: center;
  }
}
</style>
