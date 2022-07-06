import { createApp } from 'vue'
import App from './App.vue'
import navBar from './components/navBar.vue';

const appBody=createApp(App);
const navBody=createApp(navBar);
navBody.mount("#app")
