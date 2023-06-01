import './assets/main.css';
import router from './router';

import { createApp } from 'vue';
import App from './App.vue';
import store from './app/store';

//module scaffolding
const app = createApp(App);

//middlewares
//add router
app.use(router);
app.use(store);

//mount the app
app.mount('#app');
