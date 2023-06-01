<script setup>
import { computed } from 'vue';
import store from '../app/store';

    const meals = computed(() => store.state.meals)
</script>
<template>
    {{ meals }}
</template>

<style scoped>

</style>