<script setup>
import SearchBarComponent from './components/SearchBarComponent.vue';
import PokemonGridComponent from './components/PokemonGridComponent.vue';
import BtnsNextBackGridContainer from './components/BtnsNextBackGridContainer.vue';
import PokemonModal from './components/PokemonModal.vue';
</script>
<style>
@import './assets/fontsAsset.css';
@import './assets/commonStyles.css';
</style>
<template>
<h1>{{firstName}}</h1>
    <PokemonModal/>
    <SearchBarComponent />
    <PokemonGridComponent />
    <BtnsNextBackGridContainer />
</template>
