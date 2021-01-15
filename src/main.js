import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js';
import BaseCard from './ui/BaseCard.vue';
const app = createApp(App);

app.component('base-card', BaseCard);

app.use(store);
app.use(router);

app.mount('#app');
