import { createApp, provide } from 'vue'
import App from './App.vue'
import NavBar from './components/NavBarComponent.vue';
import PresentationComponentVue from './components/PresentationComponent.vue';
import FooterComponentVue from './components/FooterComponent.vue';
//import PokemonModalVue from './components/PokemonModal.vue';


//const modalFrame=createApp(PokemonModalVue);
const navBody=createApp(NavBar);
const presentationContainerBody=createApp(PresentationComponentVue);
const appBody=createApp(App);
const footerBody=createApp(FooterComponentVue);

//modalFrame.mount('#modal-container')
presentationContainerBody.mount('#presentation-container');
navBody.mount('#nav-content');
appBody.mount('#body-content');
footerBody.mount('#pokemon-footer')