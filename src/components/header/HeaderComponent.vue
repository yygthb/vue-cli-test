<template>
  <header class="header">
    <div class="container">
      <div class="header__container">
        <p class="logo">LOGO</p>

        <nav-component />
      </div>
    </div>
  </header>
</template>

<script>
import NavComponent from '@/components/nav/NavComponent.vue';

export default {
  name: 'FooterComponent',
  components: {
    NavComponent,
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: $color-main;
  color: #fff;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;

    @include media(m) {
      height: 60px;
    }

    .logo {
      font-weight: 700;
    }
  }
}
</style>
