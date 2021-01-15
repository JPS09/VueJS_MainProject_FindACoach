import { createStore } from 'vuex';
import CoachModule from './modules/coaches/index.js';
import RequestsModule from './modules/requests/index.js';

const store = createStore({
  modules: {
    CoachModule,
    RequestsModule
  }
});

export default store;
