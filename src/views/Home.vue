<script setup>
import { computed } from 'vue';
import store from '../app/store';

const meals = computed(() => store.state.meals)
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
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
</template>

<style scoped></style>