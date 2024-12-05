import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";

import App from "./App.vue";
import '@/assets/scss/styles.scss';
import HomeView from "./components/views/HomeView.vue";


const routes = [{ path: "/", component: HomeView }];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

createApp(App).use(router).mount("#app");
