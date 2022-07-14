<script setup>
import { inject } from 'vue';
const props = defineProps(['name','types', 'weight', 'height', 'base_experience', 'sprites','id']);
/* If the nicer sprites arent available, I'll display the official sprite*/
let noFanArtAvailable=props.sprites.other.dream_world.front_default===null;
const fetchDetailedPokemonInfo=inject('fetchDetailedPokemonData');
</script>
<template>
    <div class="pokemon-card">
        <div class="pokemon-resume">
            <header class="pokemon-card-header">{{ name }}</header>
            <img v-if="!noFanArtAvailable" class="poke-img" :src=props.sprites.other.dream_world.front_default>
            <img v-if="noFanArtAvailable" class="poke-img" :src=props.sprites.front_default>
            <span><b>Type: </b>{{types[0].type.name}}</span>
            <span><b>Weight: </b>{{ weight }}</span>
            <span><b>Height: </b>{{ height }}</span>
            <span><b>Base XP: </b>{{ base_experience }}</span>
        </div>
        <div class="poke-details-btn-container">
            <img class="pokeball-btn-img" src="./icons/pokeball.png">
            <button @click="fetchDetailedPokemonInfo(props.id)" class="pokemon-details-btn">Details</button>
        </div>
    </div>
</template>