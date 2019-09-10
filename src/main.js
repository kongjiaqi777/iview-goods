import Vue from 'vue'
import iView from 'iview'
import VueRouter from 'vue-router'
import Routers from './router'
import Vuex from 'vuex'
import Util from './libs/util'
import App from './app.vue'
import 'iview/dist/styles/iview.css'
import Layout from './components/Layout'
import store from '@/store/index'

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(iView);



// 路由配置
// const RouterConfig = {
//     mode: 'history',
//     routes: Routers
// };
// const router = new VueRouter(RouterConfig);

// router.beforeEach((to, from, next) => {
//     if (to.path === '/login') { // 当路由为login时就直接下一步操作
//         next();
//     } else { // 否则就需要判断
//         if(sessionStorage.username){  // 如果有用户名就进行下一步操作
//           next()
//         }else{
//           next({path: '/login'})  // 没有用户名就跳转到login页面
//         }
//     }
// })
// router.beforeEach((to, from, next) => {
//     iView.LoadingBar.start();
//     Util.title(to.meta.title);
//     next();
// });

// router.afterEach(() => {
//     iView.LoadingBar.finish();
//     window.scrollTo(0, 0);
// });
// main.js
// login-validate
// router.beforeEach((to, from, next) => {
//     if (store.getters.token) { // 判断是否有token
//       if (to.path === '/login') {
//         next({ path: '/' });
//       } else {
//         if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
//           store.dispatch('GetInfo').then(res => { // 拉取info
//             const roles = res.data.role;
//             store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
//               router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
//               next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
//             })
//           }).catch(err => {
//             console.log(err);
//           });
//         } else {
//           next() //当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
//         }
//       }
//     } else {
//       if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
//         next();
//       } else {
//         next('/login'); // 否则全部重定向到登录页
//       }
//     }
// });
  

// const store = new Vuex.Store({
//     state: {

//     },
//     getters: {

//     },
//     mutations: {

//     },
//     actions: {

//     }
// });


// new Vue({
//     el: '#app',
//     router: router,
//     store: store,
//     render: h => h(Layout),
//     components: { Layout },
//     template: '<Layout/>'
// });
new Vue({
    el: '#app',
    Routers,
    store,
    render: h => h(App)
})
  