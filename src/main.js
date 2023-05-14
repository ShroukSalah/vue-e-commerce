import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
 import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import './index.css'
createApp(App).use(router).use(VueAxios, axios).use(Quasar, quasarUserOptions).mount('#app')
