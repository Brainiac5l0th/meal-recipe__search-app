import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"

//defining all the routes
const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    }
]

//creating router 
const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;