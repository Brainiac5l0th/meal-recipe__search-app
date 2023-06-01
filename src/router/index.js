import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealList from "../views/MealList.vue";

//defining all the routes
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/letter/:letter",
        name: "byLetter",
        component: MealList
    }
]

//creating router 
const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;