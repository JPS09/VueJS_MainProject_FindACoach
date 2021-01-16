<template>
  <section>
    <base-card>
      <h2>Join us as a Coach!</h2>
      <coach-form @register-coach="registerCoach"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: {
    CoachForm
  },
  methods: {
    registerCoach(formData) {
      this.$store.dispatch('coaches/registerCoach', formData);
    }
  }
};
</script>
