

<template>
    <div class="w-full md:w-3/4 m-auto px-2 mt-4">
        <div class="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 grid-wrap gap-2 md:gap-4 my-2 md:my-4">
            <template v-if="ingrediants.length > 0">

                <IngrediantItem v-for="ingrediant of ingrediants" :key="ingrediant?.idIngredient">
                    <router-link :to="{ name: 'ingrediants', params: { ingrediant: ingrediant.strIngredient } }">{{
                        ingrediant.strIngredient }}
                    </router-link>
                </IngrediantItem>
            </template>
            <template v-else class="text-center font-bold text-md">Loading...</template>

        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import IngrediantItem from "../components/IngrediantItem.vue";
import axiosInstance from "../utils/axios";

const ingrediants = ref([]);
onMounted(() => {
    axiosInstance.get("list.php?i=list").then(({ data }) => {
        ingrediants.value = data.meals;
    })
})
</script>

<style scoped></style>