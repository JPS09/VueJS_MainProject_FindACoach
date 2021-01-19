import { createStore } from 'vuex';
import coachModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    coaches: coachModule,
    requests: requestsModule,
    auth: authModule
  },
  state() {
    return {
      coachId: 'c3'
    };
  },
  getters: {
    coachId(state) {
      return state.coachId;
    }
  }
});

export default store;
