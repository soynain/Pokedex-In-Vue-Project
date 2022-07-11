<script setup>
import PokemonChartStats from "./PokemonChartStats.vue";

</script>
<style>
@import '../assets/fontsAsset.css';
@import '../assets/commonStyles.css';
@import '../assets/ModalSyles.css';
</style>
<template>
    <div class="modalbody">
        <section class="more-info-card">
            <header id="pokemon-card-name">Pikachu</header>
            <section class="pokemon-basic-stats">
                <aside class="poke-img-cont">
                    <img
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg">
                </aside>
                <aside class="poke-data-stats">
                    <span><b>Type: </b>electric</span>
                    <span><b>Weight: </b>60</span>
                    <span><b>Height: </b>4</span>
                    <span><b>Base XP: </b>112</span>
                    <span><b>Base Happiness: </b>50</span>
                    <span><b>Capture rate: </b>190</span>
                    <span><b>Pokemon Color: </b>Yellow</span>
                    <span><b>Growth Rate: </b>Medium</span>
                    <span><b>Habitat: </b>Forest</span>
                    <span><b>It's a baby?: </b>No</span>
                    <span><b>Legendary?: </b>No</span>
                    <span><b>Mythical: </b>No</span>
                </aside>
            </section>
            <section class="pokemon-principal-stats">
                <PokemonChartStats id="canvas" />
            </section>
        </section>
    </div>
</template>