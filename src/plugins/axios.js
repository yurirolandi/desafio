import Vue from 'vue';
import axios from 'axios';


Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://mundipagg-fd4f6.firebaseio.com/'
        })
    }
});