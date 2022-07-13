<script setup>
const props = defineProps(['name', 'weight', 'height', 'base_experience', 'sprites']);
//console.log(props.sprites.other.dream_world.front_default);
</script>
<template>
    <div class="pokemon-card">
        <div class="pokemon-resume">
            <header class="pokemon-card-header">{{ name }}</header>
            <img class="poke-img" :src=sprites.other.dream_world.front_default>
            <span><b>Type: </b>NULL</span>
            <span><b>Weight: </b>{{ weight }}</span>
            <span><b>Height: </b>{{ height }}</span>
            <span><b>Base XP: </b>{{ base_experience }}</span>
        </div>
        <div class="poke-details-btn-container">
            <img class="pokeball-btn-img" src="./icons/pokeball.png">
            <button class="pokemon-details-btn">Details</button>
        </div>
    </div>
</template>