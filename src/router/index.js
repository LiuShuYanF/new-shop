import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Personal from '../pages/Personal/Personal.vue'



Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {
            path:'/msite',
            component:Msite,
        },
        {
            path:'/order',
            component:Order,
        },
        {
            path:'/search',
            component:Search,
        },
        {
            path:'/personal',
            component:Personal,
        },
        {
            path:'/',
            redirect:'/msite'
        },
    ]
})