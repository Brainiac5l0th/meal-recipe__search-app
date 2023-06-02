import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealsByIngrediants from "../views/MealsByIngrediants.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";

//defining all the routes
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName
    },
    {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter
    },
    {
        path: "/by-ingrediants/:ingrediant?",
        name: "byIngrediants",
        component: MealsByIngrediants
    }
]

//creating router 
const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;