import authMutations from './mutations.js';
import authActions from './actions.js';
import authGetters from './getters.js';
export default {
  state() {
    return {
      mode: 'login'
    };
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters
};
