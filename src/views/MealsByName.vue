<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import { useRoute } from "vue-router";
import store from "../app/store";
import MealItem from "../components/MealItem.vue";

const route = useRoute();

const keyword = ref("");
//get searched result from the store
const meals = computed(() => store.state.searchedMeals);

//function for get request by name
function getSearchMeals() {
    store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
    //get keyword value from the params
    keyword.value = route.params.name;

    if (keyword.value) {
        getSearchMeals();
    }
})
</script>

<template>
    <div class="flex p-8 justify-center">
        <input v-model="keyword" type="text" class="rounded-md border-gray-500 font-semibold w-full md:w-3/4"
            placeholder="search for meals" @change="getSearchMeals" />
    </div>
    <div class="w-full md:w-3/4 m-auto px-2 ">
        <div class="flex justify-between" v-show="meals?.length > 0 && keyword">
            <h2 v-show="keyword">Search: "{{ keyword }}"</h2>
            <p v-show="meals?.length > 0" class="font-semibold">Total Result: {{ meals?.length }}</p>
        </div>
        <div v-if="meals?.length > 0"
            class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 rounded-md cursor-pointer mt-5">
            <div v-for="meal of meals" :key="meal.idMeal"
                class="shadow-md rounded translate transition duration-300 ease-in-out hover:scale-[1.02] overflow-hidden min-w-[200] antialiased">
                <MealItem :mealInfo="meal" />
            </div>
        </div>
        <div v-else class="text-center bg-pink-50">
            <p class="text-pink-500 py-4 font-semibold">No meals Found!</p>
        </div>
    </div>
</template>

<style scoped></style>