import { createApp } from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue';
import PresentationComponentVue from './components/PresentationComponent.vue';
const navBody=createApp(NavBar);
const presentationContainerBody=createApp(PresentationComponentVue);
const appBody=createApp(App);

presentationContainerBody.mount('#presentation-container');
navBody.mount('#nav-content')
appBody.mount('#body-content')