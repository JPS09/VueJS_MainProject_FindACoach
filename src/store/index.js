import { createStore } from 'vuex';
import coachModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';

const store = createStore({
  modules: {
    coachModule,
    requestsModule
  }
});

export default store;
