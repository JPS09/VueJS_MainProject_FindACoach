import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js';
import BaseCard from './ui/BaseCard.vue';
import BaseButton from './ui/BaseButton.vue';
import BaseBadge from './ui/BaseBadge.vue';
import BaseSpinner from './ui/BaseSpinner.vue';
import BaseDialog from './ui/BaseDialog.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

app.use(store);
app.use(router);

app.mount('#app');
