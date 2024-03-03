import TasksView from '@/views/TasksView.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'tasks',
    component: TasksView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  }
]

const router = new VueRouter({
  routes,
})

export default router;
