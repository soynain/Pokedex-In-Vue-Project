<script setup>
import { onMounted, ref } from 'vue';

const carrouselState = ref(0);
onMounted(() => {
    const imgSlider = document.getElementById('img-slider');

    const incrementSlideValue = () => {
        return carrouselState.value++;
    };

    setInterval(() => {
        incrementSlideValue();
        console.log(carrouselState.value);
        if (carrouselState.value === 3) carrouselState.value = 0;
    }, 2000);
})


</script>
<style>
@import '../assets/fontsAsset.css';
@import '../assets/commonStyles.css';
@import '../assets/presentationStyles.css';

.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.5s ease-out;

}

.slide-up-enter-from {
    opacity: 0;
    transform: translateX(50%);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translateX(-50%);
}

.transitive-container-helper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    position: relative;
}
</style>
<template>
    <section class="presentation-container-divider">
        <div class="presentation-container-divider-texts">
            <h1>Welcome to the Pokedex!</h1>
            <span id="introduction-text-margin" class="introduction-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aperiam laborum, voluptatum non
                architecto iusto dolorum aliquam suscipit reprehenderit unde doloribus cumque error quasi ab dolores?
                Possimus nisi aliquam architecto?
            </span>
        </div>
        <div class="presentation-container-divider-carrousel">
            <div class="transitive-container-helper">
                <Transition name="slide-up">
                    <img v-if="carrouselState === 0" id="img-slider" src="/pikachu.png">
                    <img v-else-if="carrouselState === 1" id="img-slider" src="/squittle.png">
                    <img v-else-if="carrouselState === 2" id="img-slider" src="/charizard.png">
                    <img v-else-if="carrouselState === 3" id="img-slider" src="/bulbasaur.png">
                </Transition>
            </div>

            <span class="introduction-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, id atque.
                Aut atque temporibus delectus voluptatum ducimus aliquam quasi sit.
            </span>
        </div>
    </section>
</template>