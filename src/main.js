import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import liff from '@line/liff';

liff.init({
    liffId: '2001258142-JNl6a7XL',
});

createApp(App).mount('#app')
