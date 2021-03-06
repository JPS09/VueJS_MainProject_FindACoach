<template>
  <div>
    <base-dialog
      :show="!!error"
      title="Something went wrong"
      @close="handleError"
    >
      <!--- '!!' converts the value to a boolean-->
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <coach-filter @change-filter="setFilter"></coach-filter>
    </section>
    <base-card>
      <section>
        <div class="controls">
          <base-button mode="outline" @click="loadCoaches(true)"
            >Refresh</base-button
          >
          <base-button
            link
            :to="linkRegisterButton"
            v-if="displayRegisterButton"
          >
            {{ TextRegisterButton }}
          </base-button>
          <!--Adding a prop sets it to true -->
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoaches">
          <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          ></coach-item>
        </ul>
        <h3 v-else>Sorry, no coaches to display yet</h3>
      </section>
    </base-card>
  </div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  components: {
    CoachItem,
    CoachFilter
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        backend: true,
        frontend: true,
        career: true
      }
    };
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'] && !this.isLoading;
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    displayRegisterButton() {
      return !this.isCoach && !this.isLoading;
    },
    TextRegisterButton() {
      if (!this.isAuthenticated) {
        return 'Log In and Register as a Coach';
      } else {
        return 'Register as a Coach';
      }
    },
    linkRegisterButton() {
      if (!this.isAuthenticated) {
        return '/login?redirect=register';
      } else {
        return '/register';
      }
    }
  },
  methods: {
    setFilter(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/fetchCoaches', {
          refreshNow: refresh
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  },
  created() {
    this.loadCoaches();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
