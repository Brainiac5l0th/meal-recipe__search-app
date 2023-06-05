<script setup></script>
<template>
    <header
        class="flex justify-between sticky top-0 w-full h-16 lg:w-10/12 m-auto md:px-4 bg-gray-50 rounded-md z-50 shadow-md">
        <router-link :to="{ name: 'Home' }" class="inline-flex items-center font-semibold text-xl px-2 h-full">
            Meals
        </router-link>
        <div class="flex md:gap-3 hidden md:inline-flex">
            <router-link :to="{ name: 'byName' }" class="px-2 inline-flex items-center hover:bg-purple-50">
                Search Meals
            </router-link>
            <router-link :to="{ name: 'byLetter' }" class="px-2 inline-flex items-center hover:bg-purple-50">
                Meals By Letter
            </router-link>
            <router-link :to="{ name: 'byIngrediants' }" class="px-2 inline-flex items-center hover:bg-purple-50">
                Ingrediants
            </router-link>
        </div>
    </header>
</template>