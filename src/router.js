import { resolve } from "path";

const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
}, {
    path: '/home',
    meta:   {
        title: '商品列表'
    },
    component: (resolve) => require(['./views/goods.vue'], resolve)
}];
export default routers;