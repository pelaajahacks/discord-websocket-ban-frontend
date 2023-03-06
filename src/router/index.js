import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(
        process.env.BASE_URL),
    routes: [{
            path: "/",
            name: "home",
            component: () =>
                import ("../views/Home-View.vue")
        },
        {
            path: "/login",
            name: "login",
            component: () =>
                import ("../views/Login-Page.vue")
        },
        {
            path: "/signup",
            name: "signup",
            component: () =>
                import ("../views/Signup-Page.vue")
        }
    ]
})

export default router