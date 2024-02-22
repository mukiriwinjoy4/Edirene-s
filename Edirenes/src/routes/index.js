import {createRouter, createWebHistory} from 'vue-router'

import HomePage from "./../components/HomePage.vue"
import Gallery from "./../components/Gallery.vue"
import ContactUs from "./../components/ContactUs.vue"
import OrderDetails from "./../components/OrderDetails.vue"
import SignIn from "./../components/SignIn.vue"



const routes = [
    {
        path: '/',
        name: 'homepage',
        component: HomePage,
    }, 
    {
        path: '/gallery',
        name: 'gallery',
        component: Gallery,
    },
    {
        path: '/contactus',
        name: 'contactus',
        component: ContactUs,
    },
    {
        path: '/orderdetails',
        name: 'orderdetails',
        component: OrderDetails,
    },
        {
        path: '/signin',
        name: 'signin',
        component: SignIn,
    },
   
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router