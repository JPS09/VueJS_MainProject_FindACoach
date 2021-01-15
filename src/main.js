import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js';

const app = createApp(App);

app.user(store);
app.use(router);

app.mount('#app');
