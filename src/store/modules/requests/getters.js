export default {
  receivedRequests(state, _2, _3, rootGetters) {
    const userId = rootGetters.userId;
    return state.requests.filter(req => req.userId === userId);
  },
  hasRequests(_1, getters) {
    return getters.receivedRequests && getters.receivedRequests.length > 0;
  }
};
