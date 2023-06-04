

<template>
    <div class="w-full md:w-3/4 m-auto">
        <div class="flex justify-center items-center gap-2 mt-2 flex-wrap bg-slate-200 py-3">
            <router-link :to="{
                name: 'byLetter', params: { letter }
            }" v-for="letter of letters" :key="letter" :activeClass="'text-red-500 font-semibold text-xl'">
                {{ letter }}
            </router-link>
        </div>
        <div
            class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 rounded-md cursor-pointer my-5">
            <div v-for="meal of letterMeals" :key="meal.idMeal"
                class="shadow-md rounded translate transition duration-300 ease-in-out hover:scale-[1.02] overflow-hidden min-w-[200] antialiased">
                <MealItem :mealInfo="meal" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '../app/store';
import MealItem from '../components/MealItem.vue';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const route = useRoute();
const letterMeals = computed(() => store.state.mealsByLetter);

watch(route, () => {
    store.dispatch("searchMealsByLetter", route.params.letter);
})

onMounted(() => {
    store.dispatch("searchMealsByLetter", route.params.letter);
})
</script>

<style scoped></style>