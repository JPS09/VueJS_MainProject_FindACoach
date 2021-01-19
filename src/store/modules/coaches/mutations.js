export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  fetchCoaches(state, payload) {
    state.coaches = payload;
  },
  setFetchTime(state) {
    state.lastFetch = new Date().getTime();
  }
};
