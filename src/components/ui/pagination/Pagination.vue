<template>
  <div class="pagination">
    <span
      v-for="page of totalPages"
      :key="page"
      :class="{
        page: true,
        page__current: page === currentPage,
      }"
      @click="$emit('changePage', page)"
      >{{ page }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    totalPages: Number,
    currentPage: Number,
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  width: max-content;
  margin: 20px auto;

  .page {
    width: 30px;
    display: inline-block;
    padding: 5px 0;
    margin: 0 5px;
    border-radius: 3px;
    text-align: center;

    &:not(.page__current):hover {
      background-color: lighten($color-main, 30%);
      color: #fff;
      cursor: pointer;
    }

    &.page__current {
      font-weight: 700;
      color: lighten($color-main, 30%);
    }
  }
}
</style>
