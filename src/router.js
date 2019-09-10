import { resolve } from "path";

// export default [
// {
//     path: '/home',
//     name: 'goodsInfo',
//     meta: {
//         title: '商品列表'
//     },
//     showPage: true,
//     icon: 'ios-book',
//     component: (resolve) => require(['./views/goods.vue'], resolve)
// }, {
//     path: '/customer',
//     name: 'customer',
//     meta: {
//         title: '客户列表'
//     },
//     showPage: true,
//     icon: 'ios-contact',
//     component: (resolve) => require(['./views/customer_list.vue'], resolve)
// }, {
//     path: '/supplier',
//     name: 'supplier',
//     meta: {
//         title: '供应商管理'
//     },
//     showPage: true,
//     icon: 'ios-contact',
//     component: (resolve) => require(['./views/supplier_list.vue'], resolve)
// }, {
//     path: '/category',
//     name: 'category',
//     meta: {
//         title: '类别管理'
//     },
//     showPage: true,
//     icon: 'ios-contact',
//     component: (resolve) => require(['./views/category_list.vue'], resolve)
// }, {
//     path: '/sales',
//     name: 'sales',
//     meta: {
//         title: '销售订单'
//     },
//     showPage: true,
//     icon: 'ios-contact',
//     component: (resolve) => require(['./views/sales_order.vue'], resolve)
// }, {
//     path: '/purchase',
//     name: 'purchase',
//     meta: {
//         title: '采购订单'
//     },
//     showPage: true,
//     icon: 'ios-contact',
//     component: (resolve) => require(['./views/purchase_order.vue'], resolve)
// }, {
//     path: '/payment',
//     name: 'payment',
//     meta: {
//         title: '还款管理'
//     },
//     showPage: true,
//     icon: 'ios-contact',
//     component: (resolve) => require(['./views/payment_list.vue'], resolve)
// }, {
//     path: '/customerInfo',
//     name: 'customerInfo',
//     meta: {
//         title: '账目管理'
//     },
//     showPage: true,
//     icon: 'ios-contact',
//     component: (resolve) => require(['./views/customer_list.vue'], resolve)
// }, {
//     path: '/',
//     name: 'login',
//     meta: {
//         title: '登录'
//     },
//     showPage: false,
//     icon: 'ios-book',
//     component: (resolve) => require(['./views/login.vue'], resolve)
// }]

// // export default routers

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/components/Layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: (resolve) => require(['./views/login.vue'], resolve),
    hidden: true
  },
  {
    path: '/goods',
    component: Layout,
    redirect: '/goods',
    children: [{
      path: 'goods',
      name: 'goods',
      component: (resolve) => require(['./views/goods.vue'], resolve),
      meta: { title: 'goodsInfo', icon: 'dashboard' }
    }]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
