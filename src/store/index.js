import { createStore } from 'vuex';
import coachModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';

const store = createStore({
  modules: {
    coaches: coachModule,
    requests: requestsModule
  },
  state() {
    return {
      coachId: 'c3'
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;
