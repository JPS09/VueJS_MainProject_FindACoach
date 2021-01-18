<template>
  <base-dialog
    :show="!!error"
    title="Something went wrong"
    @close="handleError"
  >
    {{ error }}
  </base-dialog>
  <section>
    <base-card>
      <header>
        <h2>Received Requests</h2>
      </header>
      <base-spinner v-if="isLoading"></base-spinner>
      <ul v-else-if="hasRequests">
        <request-item
          v-for="request in requests"
          :key="request.id"
          :message="request.message"
          :email="request.userEmail"
        ></request-item>
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
  data() {
    return {
      isLoading: false,
      error: null
    };
  },
  components: {
    RequestItem
  },
  computed: {
    requests() {
      return this.$store.getters['requests/receivedRequests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'] && !this.isLoading;
    }
  },
  methods: {
    async loadRequest() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.error =
          error.message || 'Something went wrong while fetching requests';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  },
  created() {
    this.loadRequest();
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
