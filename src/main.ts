//application
import { createApp } from 'vue'
import App from "@/App.vue";
import router from './router'
import store from "@/store/store";

//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//animate.css library
import 'animate.css'

//styles
import '@/assets/css/global_classes.css'
import '@/assets/css/main.css'
import '@/assets/css/colors.css'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(vuetify).use(store).use(router).mount('#app')
