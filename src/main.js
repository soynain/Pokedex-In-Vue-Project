import { createApp } from 'vue'
import App from './App.vue'
import navBar from './components/navBar.vue';
import PresentationComponentVue from './components/PresentationComponent.vue';
const navBody=createApp(navBar);
const presentationContainerBody=createApp(PresentationComponentVue);
const appBody=createApp(App);

presentationContainerBody.mount('#presentation-container');
navBody.mount('#nav-content')
