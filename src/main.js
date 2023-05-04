import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from "@/router";
import VeeValidate from 'vee-validate';
import VueCarousel from '@chenfengyuan/vue-carousel';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

library.add(faPhone)
library.add(faPen)
library.add(faTrash)

const app = createApp(App)
app.use(router)
app.use(VeeValidate)
app.use(VueAwesomePaginate)
app.component(VueCarousel.name, VueCarousel)

app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')