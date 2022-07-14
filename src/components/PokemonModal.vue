<script setup>
import { inject, onMounted, provide } from "vue";
import PokemonChartStats from "./PokemonChartStats.vue";
const modalDisplay=inject('modalDisplay');
const detailedInfoIndividualPokemonArr=inject('detailedInfoAboutPokemon');
const [basicInfo,aditionalInfo]=detailedInfoIndividualPokemonArr.value;
//console.log(modalDisplay.value,' and the info: ',basicInfo,' ',aditionalInfo);
const closePokemonInfoModal=()=>{
    modalDisplay.value=false;
};

let noFanArtAvailable=basicInfo.sprites.other.dream_world.front_default===null;
provide('chartStadistics',basicInfo.stats);
</script>
<style>
@import '../assets/fontsAsset.css';
@import '../assets/commonStyles.css';
@import '../assets/ModalSyles.css';
</style>
<template>
    <div class="modalbody">
        <section class="more-info-card">
            <section id="basic-data-container">
                <header id="pokemon-card-name">{{basicInfo.name}}</header>
            <img @click="closePokemonInfoModal" id="close-modal" src="../components/icons/cancel.png" >
            </section>
            <section class="pokemon-basic-stats">
                <aside class="poke-img-cont">
                    <img v-if="noFanArtAvailable" v-bind:src="basicInfo.sprites.front_default">   
                    <img v-if="!noFanArtAvailable" v-bind:src="basicInfo.sprites.other.dream_world.front_default">                        
                </aside>
                <aside class="poke-data-stats">
                    <span><b>Type: </b>{{basicInfo.types[0].type.name}}</span>
                    <span><b>Weight: </b>{{basicInfo.weight}}</span>
                    <span><b>Height: </b>{{basicInfo.height}}</span>
                    <span><b>Base XP: </b>{{basicInfo.base_experience}}</span>
                    <span><b>Base Happiness: </b>{{aditionalInfo.base_hapiness}}</span>
                    <span><b>Capture rate: </b>{{aditionalInfo.capture_rate}}</span>
                    <span><b>Pokemon Color: </b>{{aditionalInfo.color.name}}</span>
                    <span><b>Growth Rate: </b>{{aditionalInfo.growth_rate.name}}</span>
                    <span><b>Habitat: </b>{{aditionalInfo.habitat.name}}</span>
                    <span><b>It's a baby?: </b>{{aditionalInfo.is_baby}}</span>
                    <span><b>Legendary?: </b>{{aditionalInfo.is_legendary}}</span>
                    <span><b>Mythical: </b>{{aditionalInfo.is_mythical}}</span>
                </aside>
            </section>
            <section class="pokemon-principal-stats">
                <PokemonChartStats id="canvas" />
            </section>
        </section>
    </div>
</template>