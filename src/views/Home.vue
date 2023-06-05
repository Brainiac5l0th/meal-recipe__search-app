<template>
    <div class="m-auto w-full lg:w-3/4 px-4">
        <h2 class="font-semibold text-xl my-2 md:my-4">Random Meals</h2>
        <div
            class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 rounded-md cursor-pointer my-5">
            <div v-for="meal of meals" :key="meal.idMeal"
                class="shadow-md rounded translate transition duration-300 ease-in-out hover:scale-[1.02] overflow-hidden min-w-[200] antialiased">
                <MealItem :mealInfo="meal" />
            </div>
        </div>
    </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import MealItem from '../components/MealItem.vue';
import axiosInstance from '../utils/axios';

const meals = ref([]);
onMounted(async () => {
    for (let i = 0; i < 10; i++) {
        axiosInstance
            .get(`random.php`)
            .then(({ data }) => meals.value.push(data.meals[0]));
    }
});

</script>


<style scoped></style>