<template>
    <div class="w-full md:w-3/4 m-auto px-2 mt-4">
        <div
            class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 rounded-md cursor-pointer my-5">
            <div v-for="meal of ingrediantMeals" :key="meal.idMeal"
                class="shadow-md rounded translate transition duration-300 ease-in-out hover:scale-[1.02] overflow-hidden min-w-[200] antialiased">
                <MealItem :mealInfo="meal" />
            </div>
        </div>
    </div>
</template> 


<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from '../app/store';
import MealItem from './MealItem.vue';

const route = useRoute();
const ingrediantMeals = computed(() => store.state.mealsByIngrediant);


onMounted(() => {
    store.dispatch("searchMealsByIngrediant", route.params?.ingrediant);
})

</script>


<style scoped></style>