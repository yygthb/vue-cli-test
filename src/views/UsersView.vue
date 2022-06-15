<template>
  <h1 class="main-title">USERS PAGE</h1>

  <h3 class="users__title">Users:</h3>
  <loader v-if="isLoading" />
  <users-list v-else class="users" :users="users" />
</template>

<script>
import Loader from '@/components/ui/loader/Loader.vue';
import UsersList from '@/components/user/UsersList.vue';
import axios from 'axios';

const usersUrl = 'https://jsonplaceholder.typicode.com/users?_limit=2';

export default {
  components: {
    Loader,
    UsersList,
  },
  data() {
    return {
      isLoading: false,
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

        const res = await axios.get(usersUrl);
        if (res.status === 200) {
          this.users = res.data;
        }
      } catch (error) {
        console.error('get users Error', error);
        throw new Error(error);
      } finally {
        this.isLoading = false;
      }
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
