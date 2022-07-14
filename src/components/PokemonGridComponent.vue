<script setup>
import PokemonCardGridComponent from './PokemonCardGridComponent.vue';
import { inject,onMounted,ref } from 'vue';
let dataFnAndPaginateNumbers = inject('pokemonJsons');

const pokeDataRequestFn = dataFnAndPaginateNumbers[0];
let paginateRangeStart = dataFnAndPaginateNumbers[1],
    paginateRangeEnd = dataFnAndPaginateNumbers[2],
    pokeJsonData = [];

pokeJsonData=[];pokeJsonData = await pokeDataRequestFn(paginateRangeStart.value, paginateRangeEnd.value);

onMounted(()=>{
    dataFnAndPaginateNumbers[3].value=true;
})
</script>
<style>
@import '../assets/PokemonGridStyles.css';
</style>
<template>
    <section class="grid-container">
        <div class="grid-card-container">
            <PokemonCardGridComponent 
            v-for="pokemon in pokeJsonData.filter(e=>{
                    return e!==undefined
                })" 
                v-bind="pokemon" 
                ref="p"
            />
        </div>
    </section>
</template>