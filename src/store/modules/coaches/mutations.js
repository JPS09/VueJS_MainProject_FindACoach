export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  fetchCoaches(state, payload){
    state.coaches = payload
  }
};
