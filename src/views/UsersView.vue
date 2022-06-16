<template>
  <h1 class="main-title">USERS PAGE</h1>

  <h3 class="users__title">Users:</h3>
  <loader v-if="isLoading" />
  <users-list v-else class="users" :users="users" />

  <pagination
    :currentPage="currentPage"
    :totalPages="totalPages"
    @change-page="changePage"
  />
</template>

<script>
import Loader from '@/components/ui/loader/Loader.vue';
import UsersList from '@/components/user/UsersList.vue';
import Pagination from '@/components/ui/pagination/Pagination.vue';
import axios from 'axios';

const usersUrl = `https://jsonplaceholder.typicode.com/users`;

export default {
  components: {
    Loader,
    UsersList,
    Pagination,
  },
  data() {
    return {
      isLoading: false,
      limit: 3,
      currentPage: 1,
      totalPages: 0,
      users: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      try {
        this.isLoading = true;

        const res = await axios.get(usersUrl, {
          params: {
            _limit: this.limit,
            _page: this.currentPage,
          },
        });
        if (res.status === 200) {
          this.totalPages = Math.ceil(
            res.headers['x-total-count'] / this.limit
          );

          this.users = res.data;
        }
      } catch (error) {
        console.error('get users Error', error);
        throw new Error(error);
      } finally {
        this.isLoading = false;
      }
    },
    changePage(pageNum) {
      if (pageNum !== this.currentPage) {
        this.currentPage = pageNum;
      }
    },
  },
  watch: {
    currentPage() {
      this.getUsers();
    },
  },
};
</script>

<style lang="scss" scoped>
.main-title {
  margin-bottom: 20px;
}

.users__title {
  margin-bottom: 10px;
}
</style>
