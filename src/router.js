import { resolve } from "path";

export default [
{
    path: '/',
    name: 'goodsInfo',
    meta: {
        title: '商品列表'
    },
    icon: 'ios-book',
    component: (resolve) => require(['./views/goods.vue'], resolve)
}, {
    path: '/customer',
    name: 'customer',
    meta: {
        title: '客户列表'
    },
    icon: 'ios-contact',
    component: (resolve) => require(['./views/customer_list.vue'], resolve)
}, {
    path: '/supplier',
    name: 'supplier',
    meta: {
        title: '供应商管理'
    },
    icon: 'ios-contact',
    component: (resolve) => require(['./views/supplier_list.vue'], resolve)
}, {
    path: '/category',
    name: 'category',
    meta: {
        title: '类别管理'
    },
    icon: 'ios-contact',
    component: (resolve) => require(['./views/category_list.vue'], resolve)
}, {
    path: '/sales',
    name: 'sales',
    meta: {
        title: '销售订单'
    },
    icon: 'ios-contact',
    component: (resolve) => require(['./views/sales_order.vue'], resolve)
}, {
    path: '/purchase',
    name: 'purchase',
    meta: {
        title: '采购订单'
    },
    icon: 'ios-contact',
    component: (resolve) => require(['./views/purchase_order.vue'], resolve)
}, {
    path: '/payment',
    name: 'payment',
    meta: {
        title: '还款管理'
    },
    icon: 'ios-contact',
    component: (resolve) => require(['./views/payment_list.vue'], resolve)
}, {
    path: '/customerInfo',
    name: 'customerInfo',
    meta: {
        title: '账目管理'
    },
    icon: 'ios-contact',
    component: (resolve) => require(['./views/customer_list.vue'], resolve)
}, {
    path: '/login',
    name: 'login',
    meta: {
        title: '登录'
    },
    icon: 'ios-book',
    component: (resolve) => require(['./views/login.vue'], resolve)
}]
// export default routers;