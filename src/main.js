import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import liff from '@line/liff';

liff.init({
    liffId: '1234567890-AbcdEfgh', // Use own liffId
});

createApp(App).mount('#app')
