<script setup>
import { onBeforeMount, onMounted, provide, ref } from 'vue';
import SearchBarComponent from './components/SearchBarComponent.vue';
import PokemonGridComponent from './components/PokemonGridComponent.vue';
import BtnsNextBackGridContainer from './components/BtnsNextBackGridContainer.vue';
import PokemonModal from './components/PokemonModal.vue';
const modalDisplay=ref(false);
let paginateRangeStart=ref(0),paginateRangeEnd=ref(21);
let promisePokeDataArray=[];
provide('modalDisplay',modalDisplay);
for(let i=1;i<=paginateRangeEnd.value;i++){
    promisePokeDataArray.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`))
}
/*Promise.all(promisePokeDataArray).then(responses=>{
    return Promise.all(responses.map(res=>res.json()))
}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err,' fallo algo')
})*/

let pokeDataRequest=async ()=>{
    let responses=await Promise.all(promisePokeDataArray);
    let jsonResponses=await Promise.all(responses.map(res=>res.json()));
    return jsonResponses;
}

onBeforeMount(async()=>{
    provide('pokemonJsons',pokeDataRequest());
})

onMounted(()=>{

})
</script>
<style>
@import './assets/fontsAsset.css';
@import './assets/commonStyles.css';
</style>
<template>
    <PokemonModal v-if="modalDisplay"/>
    <SearchBarComponent />
    <PokemonGridComponent />
    <BtnsNextBackGridContainer />
</template>
