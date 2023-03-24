import { createApp } from 'vue'

import App from './App.vue'

createApp(App).mount('#app')

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import sass from 'vite-plugin-sass';


export default defineConfig({
    plugins: [vue(), sass()],
});