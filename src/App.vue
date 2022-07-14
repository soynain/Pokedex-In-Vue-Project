<script setup>
import { onBeforeMount, onMounted, provide, ref } from 'vue';
import SearchBarComponent from './components/SearchBarComponent.vue';
import PokemonGridComponent from './components/PokemonGridComponent.vue';
import BtnsNextBackGridContainer from './components/BtnsNextBackGridContainer.vue';
import PokemonModal from './components/PokemonModal.vue';
const modalDisplay = ref(false);
let paginateRangeStart = ref(1),
    paginateRangeEnd = ref(21),
    refreshPokemonGrid = ref(0),
    goBackButtonDisplay = ref(false),
    notDisplayButtonsWhileReloadingGrid = ref(true),
    detailedInfoAboutPokemon=ref({}),
    promisePokeDataArray = [];

/*Requesting and returning pokemon json  data*/
const pokeDataRequest = async (paginateRangeStart, paginateRangeEnd) => {
    for (let i = paginateRangeStart; i <= paginateRangeEnd; i++) {
        promisePokeDataArray.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }

    let responses = await Promise.allSettled(promisePokeDataArray.map(e => fetch(e).then(c => { return c }))); /*we can fetch data unresolved*/
    let jsonResponses = await Promise.all(responses.map(res => { if (res.status === 'fulfilled' && res.value.status !== 404) { return res.value.clone().json() } }));
    promisePokeDataArray = [];
    return jsonResponses;
};

/*Method to obtain more detailed info about a pokemon by Id*/
const fetchDetailedPokemonInfo = async (pokemonId) => {
    let promiseArray=[`https://pokeapi.co/api/v2/pokemon/${pokemonId}`,`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`]
    let pokemonIndividualDataReq = await Promise.all(promiseArray.map(urls=>{
        return fetch(urls);
    }));
    let jsonPokemonIdividualData = await Promise.all(pokemonIndividualDataReq.map(jsons=>{
        return jsons.json();
    }));
    detailedInfoAboutPokemon.value=jsonPokemonIdividualData;
    modalDisplay.value=true;
};

/*We can refresh the grid with new pokemons*/
const refreshGridSection = () => {
    refreshPokemonGrid.value++;
};
/* before mounting the app, share the refs and the json method*/
onBeforeMount(async () => {
    provide('modalDisplay', modalDisplay);
    provide('pokemonJsons', [pokeDataRequest, paginateRangeStart, paginateRangeEnd, notDisplayButtonsWhileReloadingGrid]);
    provide('refreshFn', [refreshGridSection, goBackButtonDisplay, notDisplayButtonsWhileReloadingGrid]);
    provide('fetchDetailedPokemonData', fetchDetailedPokemonInfo);
    provide('detailedInfoAboutPokemon',detailedInfoAboutPokemon);
});
</script>
<style>
@import './assets/fontsAsset.css';
@import './assets/commonStyles.css';
</style>
<template>
    <PokemonModal v-if="modalDisplay" />
    <SearchBarComponent />
    <Suspense>
        <PokemonGridComponent :key="refreshPokemonGrid" />
    </Suspense>
    <BtnsNextBackGridContainer />
</template>
