export default {
  receivedRequests(state, _2, _3, rootGetters) {
    const coachId = rootGetters.coachId;
    return state.requests.filter(req => req.coachId === coachId);
  },
  hasRequests(_1, getters) {
    return getters.receivedRequests && getters.receivedRequests.length > 0;
  }
};
