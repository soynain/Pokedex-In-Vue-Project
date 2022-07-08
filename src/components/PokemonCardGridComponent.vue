
<template>
    <div class="pokemon-card">
        <div class="pokemon-resume">
            <header class="pokemon-card-header">Pikachu</header>
            <img class="poke-img"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
                alt="">
            <span><b>Type: </b>electric</span>
            <span><b>Weight: </b>60</span>
            <span><b>Height: </b>4</span>
            <span><b>Base XP: </b>112</span>
        </div>
        <div class="poke-details-btn-container">
            <img class="pokeball-btn-img" src="./icons/pokeball.png">
            <button class="pokemon-details-btn">Details</button>
        </div>
    </div>

    <!--Each card is individual, so they are generated from the father-->
    <div class="pokemon-card">
        <div class="pokemon-resume">
            <header class="pokemon-card-header">Ditto</header>
            <img class="poke-img"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
                alt="">
            <span><b>Type: </b>Normal</span>
            <span><b>Weight: </b>40</span>
            <span><b>Height: </b>3</span>
            <span><b>Base XP: </b>112</span>
        </div>
        <div class="poke-details-btn-container">
            <img class="pokeball-btn-img" src="./icons/pokeball.png">
            <button class="pokemon-details-btn">Details</button>
        </div>
    </div>

    

</template>