<script setup>
import { onBeforeMount, onMounted, provide, ref } from 'vue';
import SearchBarComponent from './components/SearchBarComponent.vue';
import PokemonGridComponent from './components/PokemonGridComponent.vue';
import BtnsNextBackGridContainer from './components/BtnsNextBackGridContainer.vue';
import PokemonModal from './components/PokemonModal.vue';
const modalDisplay = ref(false);
let paginateRangeStart = ref(1), paginateRangeEnd = ref(21),refreshPokemonGrid=ref(0);
let promisePokeDataArray = [];

provide('modalDisplay', modalDisplay);

let pokeDataRequest = async (paginateRangeStart, paginateRangeEnd) => {
    for (let i = paginateRangeStart; i <= paginateRangeEnd; i++) {
        promisePokeDataArray.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`))
    }
    let responses = await Promise.all(promisePokeDataArray);
    let jsonResponses = await Promise.all(responses.map(res => res.clone().json()));
    return jsonResponses;
}

const refreshGridSection=()=>{
    refreshPokemonGrid.value++;
}

onBeforeMount(async () => {
    provide('pokemonJsons', [pokeDataRequest, paginateRangeStart, paginateRangeEnd]);
    provide('refreshFn',refreshGridSection);
})
</script>
<style>
@import './assets/fontsAsset.css';
@import './assets/commonStyles.css';
</style>
<template>
    <PokemonModal v-if="modalDisplay"/>
    <SearchBarComponent/>
    <Suspense>
        <PokemonGridComponent :key="refreshPokemonGrid"/>
    </Suspense>
    <BtnsNextBackGridContainer/>

</template>
