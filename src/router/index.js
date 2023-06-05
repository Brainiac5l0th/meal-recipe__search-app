import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import Ingrediants from "../components/Ingrediants.vue";
import Home from "../views/Home.vue";
import MealDetails from "../views/MealDetails.vue";
import MealsByIngrediants from "../views/MealsByIngrediants.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";

//defining all the routes
const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
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
                path: "/ingrediants/:ingrediant?",
                name: "ingrediants",
                component: Ingrediants
            },
            {
                path: "/by-ingrediants",
                name: "byIngrediants",
                component: MealsByIngrediants
            },
            {
                path: "/meals/:id",
                name: "mealDetails",
                component: MealDetails
            }
        ]
    },
    {
        path: "/login",
        component: GuestLayout
    }
]

//creating router 
const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;