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
    <div class="flex justify-center gap-2 mt-2 wrap">
        <router-link :to="{
            name: 'byLetter', params: { letter }
        }" v-for="letter of letters" :key="letter">{{ letter
}}</router-link>
    </div>
</template>

<style scoped></style>