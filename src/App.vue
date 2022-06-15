<template>
  <div class="app">
    <header-component />
    <main-component class="app__main">
      <router-view></router-view>
    </main-component>
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '@/components/header/HeaderComponent.vue';
import MainComponent from '@/components/main/MainComponent.vue';
import FooterComponent from '@/components/footer/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss">

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__main {
    flex: 1;
  }
}
</style>
