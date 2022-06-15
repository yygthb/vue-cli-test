<template>
  <div>
    <ul class="users__list">
      <user-item v-for="user in users" :key="user.id" :user="user" />
    </ul>
  </div>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
