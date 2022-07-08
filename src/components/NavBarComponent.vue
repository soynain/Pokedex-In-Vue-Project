<script setup>
import NavBarItemsComponent from './NavBarItemsComponent.vue';

</script>
<style>
@import'../assets/fontsAsset.css';
@import '../assets/commonStyles.css';
@import '../assets/navbarStyles.css';
</style>
<template class="body">
    <div class="nav-elements">
        <img id="logo" src="./icons/pokedex-logo.png">
        <NavBarItemsComponent/>
    </div>

    <img class="waveGroup" id="firstWave" src="../assets/waveRed.svg">
    <img class="waveGroup" src="../assets/waveBlue.svg">
</template>