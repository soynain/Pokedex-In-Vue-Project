<script setup>
import PokemonCardGridComponent from './PokemonCardGridComponent.vue';
import { inject, onMounted } from 'vue';
let dataFnAndPaginateNumbers = inject('pokemonJsons');
//console.log(dataFnAndPaginateNumbers);
const pokeDataRequestFn = dataFnAndPaginateNumbers[0];
let paginateRangeStart = dataFnAndPaginateNumbers[1],
    paginateRangeEnd = dataFnAndPaginateNumbers[2],
    pokeJsonData = [];

pokeJsonData = await pokeDataRequestFn(paginateRangeStart.value, paginateRangeEnd.value);
//console.log(pokeJsonData);
</script>
<style>
@import '../assets/PokemonGridStyles.css';
</style>
<template>
    <section class="grid-container">
        <div class="grid-card-container">
            <PokemonCardGridComponent v-for="pokemon in pokeJsonData" v-bind="pokemon"/>
        </div>
    </section>
</template>