import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../Login/Login'

Vue.use(VueRouter)


const routes = [
    {
        path : '/Login',
        component : Login
    }
]

const router = new VueRouter({
    routes,
    mode : 'history'
})


export default router