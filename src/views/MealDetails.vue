<template>
    <div class="m-auto w-full lg:w-3/4 px-4">
        <h1 class="font-bold text-2xl my-4">{{ meal.strMeal }}</h1>
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="max-h-inherit  bg-black flex justify-center items-center rounded-md">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full h-[90%] object-cover" />
            </div>
            <div class="ml-2 md:ml-3">
                <div class="w-full">
                    <h2 class="font-bold text-md">Ingrediants and Measurements:</h2>
                    <table class="w-full bg-slate-400 mt-2">
                        <thead class="h-8">
                            <th>Ingredient</th>
                            <th>|</th>
                            <th>Measure</th>
                        </thead>
                        <tbody class="bg-gray-100 text-center border" v-for="(el, index) of new Array(20)">
                            <template v-if="meal[`strIngredient${index + 1}`] && meal[`strMeasure${index + 1}`]">
                                <td>{{ meal[`strIngredient${index + 1}`] }}</td>
                                <td>|</td>
                                <td>{{ meal[`strMeasure${index + 1}`] }}</td>
                            </template>
                        </tbody>
                    </table>
                </div>
                <div class="grid grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4">
                    <h4 class="bg-slate-100 p-2 rounded"><strong>Area: </strong>{{ meal.strArea }}</h4>
                    <h4 class="bg-teal-50 p-2 rounded"><strong>Category: </strong>{{ meal.strCategory }}</h4>
                    <h4 class="bg-pink-50 p-2 rounded"><strong>Tags: </strong>{{ meal.strTags ? meal.strTags : "No tags" }}
                    </h4>
                </div>
            </div>
        </div>
        <div class="my-4">
            <h2 class="font-bold text-xl">Instructions</h2>
            <p>{{ meal?.strInstructions }}</p>
        </div>
    </div>
</template>

<script setup>

import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosInstance from "../utils/axios";

const route = useRoute();
const meal = ref({});

onMounted(() => {
    axiosInstance.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
        meal.value = data.meals[0] || {};
    })
})

</script>

<style scoped></style>