export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_1, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const coachId = rootGetters.coachId;
    return coaches.some(coach => coach.id === coachId); //Check if at least one element is true
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTime = new Date().getTime();
    return (currentTime - lastFetch) / 1000 > 60; // true if more than a minute ago
  }
};
