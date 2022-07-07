<style>
@import '../assets/commonStyles.css';

.presentation-container-divider {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 21rem;
    z-index: -2;
    background-color: #1D3557;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 14%;
    padding: 10px;
}

.presentation-container-divider-texts {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 100%;
}

.presentation-container-divider-texts h1 {
    color: #F1FAEE;
}

.presentation-container-divider-carrousel {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 100%;
}

.introduction-text {
    width: 50%;
    color: #F1FAEE;
    text-align: center;
    word-wrap: break-word;
}
</style>
<template>
    <div class="presentation-container-divider">
        <div class="presentation-container-divider-texts">
            <h1>Welcome to the Pokedex!</h1>
            <span class="introduction-text">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aperiam laborum, voluptatum non architecto iusto dolorum aliquam suscipit reprehenderit unde doloribus cumque error quasi ab dolores? Possimus nisi aliquam architecto?
            </span>
        </div>
        <div class="presentation-container-divider-carrousel">
            <img src="../components/icons/pikachu.png" style="width:200px;height:200px;">
            <span class="introduction-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, id atque. Aut atque temporibus delectus voluptatum ducimus aliquam quasi sit.</span>
        </div>
    </div>
</template>