import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js';
import BaseCard from './ui/BaseCard.vue';
import BaseButton from './ui/BaseButton.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.use(store);
app.use(router);

app.mount('#app');
