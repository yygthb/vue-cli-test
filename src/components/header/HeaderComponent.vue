<template>
  <header class="header">
    <div class="container">
      <div class="header__container">
        <router-link class="logo__link" to="/">LOGO</router-link>

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

    .logo__link {
      font-weight: 700;
      color: #fff;
    }
  }
}
</style>
