<script setup></script>
<template>
    <header class="flex justify-between sticky top-0 w-full h-16 lg:w-3/4 m-auto md:px-4 bg-gray-50 rounded-md">
        <router-link :to="{ name: 'Home' }" class="inline-flex items-center font-semibold text-xl px-2 h-full">
            Meals
        </router-link>
        <div class="flex md:gap-3">
            <router-link :to="{ name: 'byName', params: name }"
                class="px-2 inline-flex items-center hover:bg-purple-50">Search
                Meals</router-link>
            <router-link :to="{ name: 'byLetter' }" class="px-2 inline-flex items-center hover:bg-purple-50">Meals By
                Letter</router-link>
            <router-link :to="{ name: 'byIngrediants' }" class="px-2 inline-flex items-center hover:bg-purple-50">Meals By
                Ingrediants</router-link>
        </div>
    </header>
</template>