import './assets/main.css';
import router from './router';

import { createApp } from 'vue';
import App from './App.vue';

//module scaffolding
const app = createApp(App);

//middlewares
//add router
app.use(router);

//mount the app
app.mount('#app');
