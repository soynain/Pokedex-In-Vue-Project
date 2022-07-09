<script setup>
import { provide, ref } from 'vue';
import SliderPresentationComponent from './SliderPresentationComponent.vue';
import PresentationTextsContainer from './PresentationTextsContainer.vue';

const carrouselState = ref(0);
provide('carrouselState', carrouselState);
</script>
<style>
@import '../assets/fontsAsset.css';
@import '../assets/commonStyles.css';
@import '../assets/presentationStyles.css';
</style>
<template>
    <section class="presentation-container-divider">
        <PresentationTextsContainer />
        <div class="presentation-container-divider-carrousel">
            <SliderPresentationComponent />
        </div>
    </section>
</template>