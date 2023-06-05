<script setup>
const props = defineProps(['mealInfo']);
</script>

<template>
    <router-link :to="{
        name: 'mealDetails', params: { id: mealInfo?.idMeal }
    }">
        <img :src="mealInfo?.strMealThumb" :alt="mealInfo?.strMeal"
            class="h-48 lg:h-52 2xl:h-58 object-cover w-full translate transition duration-300 ease-in-out hover:scale-[1.01]" />
    </router-link>
    <div class="px-2 md:px-4">
        <div class="flex flex-wrap justify-between align-center my-2 md:my-4">
            <h3 class="font-semibold">{{ mealInfo?.strMeal }}</h3>
            <p v-show="mealInfo?.strArea && mealInfo?.strArea?.toLowerCase() !== 'unknown'"
                class="text-sm border px-2 rounded-md border-yellow-600 text-yellow-600 shadow-md">{{
                    mealInfo?.strArea }}
            </p>
        </div>
        <p class="my-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui odio omnis excepturi itaque
            aliquam? Vel
            quisquam
            distinctio placeat cum fugiat.</p>
        <div v-show="mealInfo?.strYoutube" class="my-2 md:my-4 flex justify-between">
            <a :href="mealInfo?.strYoutube" target="_blank"
                class="border rounded-md border-red-500 px-2 bg-red-600 text-white font-semibold">Youtube</a>
            <router-link :to="{
                name: 'mealDetails', params: { id: mealInfo?.idMeal }
            }" class="hover:underline active:underline hover:text-blue-500 active:text-blue-500">
                see Details</router-link>
        </div>
    </div>
</template>


<style scoped></style>