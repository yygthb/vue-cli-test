<template>
  <li class="user__item">
    <p class="row row__name">
      <span class="user__name">{{ user.name }}</span
      >&nbsp;
      <span class="user__username">({{ user.username }})</span>
    </p>
    <p class="row user__city">{{ user.address.city }}</p>
    <p class="row user__phone">{{ user.phone }}</p>
  </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.user__item {
  width: 100%;
  max-width: 75%;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid red;
  border-radius: 5px;

  @include media(t) {
    max-width: 100%;
  }

  .row:not(:last-child) {
    margin-bottom: 5px;
  }

  .user__name {
    font-weight: 700;
    color: red;
  }

  .user__username {
    font-style: italic;
  }

  .user__city {
    text-align: end;
    font-weight: 700;
  }

  .user__phone {
    text-align: end;
  }
}
</style>
