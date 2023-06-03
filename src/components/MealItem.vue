<script setup>
const props = defineProps(['mealInfo']);

</script>

<template>
    <img :src="mealInfo.strMealThumb" :alt="mealInfo.strMeal"
        class="h-48   object-cover w-full translate transition duration-300 ease-in-out hover:scale-[1.03]" />
    <div class="px-2 md:px-4">
        <h3 class="my-2 md:my-4 font-semibold">{{ mealInfo.strMeal }}</h3>
        <div class="my-2 md:my-4 flex justify-between">
            <a :href="mealInfo.strYoutube" target="_blank" class="border border-red-500 px-2 text-red-500">Youtube</a>
            <!-- <router-link>See More</router-link> -->
        </div>
    </div>
</template>


<style scoped></style>