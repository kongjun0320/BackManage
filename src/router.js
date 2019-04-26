import Vue from 'vue'
import Router from 'vue-router'
import ListArticle from './views/ListArticle.vue'
import CreateArticle from './views/CreateArticle.vue'
import EditArticle from './views/EditArticle.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/article/index'
    },
    {
      path: '/article/index',
      name: 'list-article',
      component:ListArticle
    },
    {
      path:'/article/create',
      name:'create-article',
      component:CreateArticle
    },
    {
      path: '/article/edit/:id',
      name: 'edit-article',
      component:EditArticle
    },
  ]
})
