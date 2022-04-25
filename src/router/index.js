import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'

// 命名路由
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  // 带参数的路由，路径参数用：冒号表示。当一个路由被匹配时，它的params的值将在每个组件中以this.$route.params的形式暴露出来。
  //同一个路由中可以设置多个路径参数
  {
    path: '/jobs/:id',
    name: 'jobdeatils',
    component: JobDetails,
    props: true
  },
  //重定向的设置，我们访问all-jobs时，会被重定向到jobs路由
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // 当路由匹配不到时，会跳转到404页面
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
