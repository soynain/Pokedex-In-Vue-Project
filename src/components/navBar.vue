<style>
@import'../assets/fontsAsset.css';
@import '../assets/commonStyles.css';
#logo {
    height: 35px;
}

.nav-elements {
    background-image: linear-gradient(180deg, #F1FAEE, #E63946);
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
}

.nav-items {
    width: 50%;
}

ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
}

li {
    list-style: none;
    color: #F1FAEE;
}

.waveGroup {
    width: 100%;
    height: 45px;
}

.waveGroup:first-child {
    z-index: 1;
}

.waveGroup:last-child {
    position: absolute;
    top: 11%;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>
<template class="body">
    <div class="nav-elements">
        <img id="logo" src="./icons/pokedex-logo.png">
        <div class="nav-items">
            <ul>
                <li>Start</li>
                <li>Pokemons</li>
                <li>About us</li>
            </ul>
        </div>
    </div>

    <img class="waveGroup" src="../assets/waveRed.svg">
    <img class="waveGroup" src="../assets/waveBlue.svg">
</template>