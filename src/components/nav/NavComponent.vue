<template>
  <nav class="nav">
    <ul class="nav__items">
      <nav-item class="nav__item">
        <router-link to="/">Home</router-link>
      </nav-item>
      <nav-item class="nav__item">
        <router-link to="/users">Users</router-link>
      </nav-item>
    </ul>
  </nav>
</template>

<script>
import NavItem from '@/components/nav/NavItem.vue';

export default {
  name: 'NavComponent',
  components: {
    NavItem,
  },
};
</script>

<style lang="scss" scoped>
.nav__items {
  display: flex;

  .nav__item {
    margin-left: 20px;

    a {
      color: #fff;
    }
  }
}
</style>
