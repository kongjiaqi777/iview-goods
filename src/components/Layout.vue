<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
</style>
<template>
    <div class="layout" v-show="this.showLayout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu :active-name="activeName" theme="dark" width="auto" @on-select="handleSelect">
                <MenuItem v-for="item in routerLink" :name="item.name" :key="item.path">
                    <router-link :to="item.path" style="color: #fff;">{{ item.meta.title}}</router-link>
                </MenuItem>
                <!-- <Submenu v-for="item in routerLink" :name="item.name" :key="item.path">
                    <template slot="title">
                        <Icon :type="item.icon"></Icon>
                        <router-link :to="item.path">{{ item.meta.title}}</router-link>
                    </template>
                    <MenuItem name="1-1">Option 1</MenuItem>
                    <MenuItem name="1-2">Option 2</MenuItem>
                    <MenuItem name="1-3">Option 3</MenuItem>
                </Submenu> -->
                <!-- <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        Item 2
                    </template>
                    <MenuItem name="2-1">Option 1</MenuItem>
                    <MenuItem name="2-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        Item 3
                    </template>
                    <MenuItem name="3-1">Option 1</MenuItem>
                    <MenuItem name="3-2">Option 2</MenuItem>
                </Submenu> -->
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
            <Content :style="{padding: '0 16px 16px', margin: '20px 0'}">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </Content>
        </Layout>
    </div>
</template>
<script>
import router from '@/router.js'
    export default {
        name: 'layout',
        data () {
            return {
                routerLink: [],
                activeName: 'goodsInfo',
                showLayout: true
            }
        },
        mounted () {
            this.routerLink = router
            // if (this.path === '/login') {
            //     this.showLayout = false
            // }
        },
        methods: {
            handleSelect (name) {
                // this.$emit('on-select', name)
                this.activeName = name
            },
            getOpenedNamesByActiveName (name) {
                return this.$route.matched.map(item => item.name).filter(item => item !== name)
            }
        }
    }
</script>
