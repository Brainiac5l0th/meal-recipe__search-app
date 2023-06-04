<script setup>
import { onMounted, ref } from 'vue';
import axiosInstance from '../utils/axios';

const meals = ref([]);


onMounted(async () => {
    try {
        const ingrediants = await axiosInstance.get("/list.php?i=list");
        meals.value = ingrediants?.data?.meals;
    } catch (error) {
        console.log(error);
    }
})

</script>

<template></template>

<style scoped></style>