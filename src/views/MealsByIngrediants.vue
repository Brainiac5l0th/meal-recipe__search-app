

<template>
    <div class="w-full md:w-3/4 m-auto px-2 mt-4">
        <div class="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 grid-wrap gap-2 md:gap-4">
            <IngrediantItem>Chicken</IngrediantItem>
            <IngrediantItem>Duck</IngrediantItem>
            <IngrediantItem>Sandwitch</IngrediantItem>
            <IngrediantItem>Shawarma</IngrediantItem>
            <IngrediantItem>Grill</IngrediantItem>
            <IngrediantItem>Fish</IngrediantItem>
            <IngrediantItem>Duck</IngrediantItem>
            <IngrediantItem>Chicken</IngrediantItem>
            <IngrediantItem>Duck</IngrediantItem>

        </div>
    </div>
</template>

<script setup>
import IngrediantItem from "../components/IngrediantItem.vue";
</script>

<style scoped></style>