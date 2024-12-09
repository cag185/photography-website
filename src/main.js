import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import "./main.css";

import SplashPage from "./components/SplashPage.vue";
import PortraitGallery from "./Galleries/PortraitGallery.vue";
import SofiaGallery from "./Galleries/SofiaGallery.vue";
import MomGallery from './Galleries/MomGallery.vue';

// Define the router instantiation
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: SplashPage },
  { path: "/portraits", component: PortraitGallery },
  { path: "/sofia", component: SofiaGallery },
  { path: "/mom", component: MomGallery },

];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});


createApp(App).use(router).mount('#app')
