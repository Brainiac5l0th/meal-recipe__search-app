<script setup>
import { onMounted, ref } from 'vue';
import axiosInstance from '../utils/axios';

const meals = ref([]);
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

onMounted(async () => {
    try {
        const ingrediants = await axiosInstance.get("/list.php?i=list");
        meals.value = ingrediants?.data?.meals;
    } catch (error) {
        console.log(error);
    }
})

</script>

<template>
    <div class="flex p-8 justify-center">
        <input type="text" class="rounded-md border-gray-500 font-semibold w-full md:w-3/4"
            placeholder="search for meals" />
    </div>

    <div class="flex justify-center gap-2 mt-2 wrap">
        <router-link :to="{
            name: 'byLetter', params: { letter }
        }" v-for="letter of letters" :key="letter">{{ letter
}}</router-link>
    </div>

    <pre>{{ meals }}</pre>
</template>

<style scoped></style>