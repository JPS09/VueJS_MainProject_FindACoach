<template>
  <section>
    <base-card>
      <header>
        <h2>Received Requests</h2>
      </header>
      <ul v-if="hasRequests">
        <li v-for="request in requests" :key="request.id">
          {{ request.message }}
        </li>
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
export default {
  computed: {
    requests() {
      return this.$store.getters['requests/receivedRequests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    }
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
