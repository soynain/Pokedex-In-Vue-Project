<script setup>
import { inject, onMounted } from 'vue';
const carrouselState = inject('carrouselState');
//console.log(carrouselState);
onMounted(() => {
    const incrementSlideValue = () => {
        return carrouselState.value++;
    };

    setInterval(() => {
        incrementSlideValue();
        //     console.log(carrouselState.value);
        if (carrouselState.value === 3) carrouselState.value = 0;
    }, 2600);
})
</script>
<style>
.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.5s ease-out;

}

.slide-up-enter-from {
    opacity: 0;
    transform: translateX(2%);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translateX(-2%);
}
</style>
<template>
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
</template>