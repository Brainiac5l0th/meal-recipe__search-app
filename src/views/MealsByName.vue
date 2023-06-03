<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import store from "../app/store";
import MealItem from "../components/MealItem.vue";
const keyword = ref("");
//get searched result from the store
const meals = computed(() => store.state.searchedMeals);

//function for get request by name
function getSearchMeals() {
    store.dispatch("searchMeals", keyword.value);
}
</script>

<template>
    <div class="flex p-8 justify-center">
        <input v-model="keyword" type="text" class="rounded-md border-gray-500 font-semibold w-full md:w-3/4"
            placeholder="search for meals" @change="getSearchMeals" />
    </div>
    <div class="w-full md:w-3/4 m-auto">
        <div class="flex justify-between" v-show="meals?.length > 0">
            <h2>Searched Result for: "{{ keyword }}"</h2>
            <p class="font-semibold">Total Result: {{ meals?.length }}</p>
        </div>
        <div class="grid grid-flow-row grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 rounded-md cursor-pointer mt-5">
            <div v-for="meal of meals" :key="meal.idMeal"
                class="shadow-md rounded translate transition duration-300 ease-in-out hover:scale-[1.03] overflow-hidden">
                <MealItem :mealInfo="meal" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>