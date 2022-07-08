<script setup>
import PokemonCardGridComponent from './PokemonCardGridComponent.vue';
</script>
<style>
@import '../assets/PokemonGridStyles.css';
</style>
<template>
<section class="grid-container">
        <div class="grid-card-container">
           <PokemonCardGridComponent/>   
           <PokemonCardGridComponent/> 
           <PokemonCardGridComponent/> 
           <PokemonCardGridComponent/>
           <PokemonCardGridComponent/> 
           <PokemonCardGridComponent/> 
           <PokemonCardGridComponent/> 
           <PokemonCardGridComponent/>       
        </div>
    </section>
</template>