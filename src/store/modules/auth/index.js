import authMutations from './mutations.js';
import authActions from './actions.js';
import authGetters from './getters.js';
export default {
  state() {
    return {
      coachId: 'c3'
    };
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters
};
