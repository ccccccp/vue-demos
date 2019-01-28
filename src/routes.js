
const routes = [
    {
        path: '/',
        component: () => import(/*webpackChunkName: "home"*/ '@/pages/home/index.vue')
    },
    {
        path: '/about',
        component: () => import(/*webpackChunkName: "about"*/ '@/pages/about/index.vue')
    },
    {
        path: '/item/:id',
        component: () => import(/*webpackChunkName: "item"*/ '@/pages/item/index.vue')
    }
]
export default routes