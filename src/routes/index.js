import Vue from 'vue';
import VueRouter from 'vue-router';
// import NewsView from '../views/NewsView.vue';
// import AskView from '../views/AskView.vue';
// import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import CreateListview from '../views/CreateListview.js'

Vue.use(VueRouter);

// 라이브러리 사용
export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      // component: NewsView,
      component: CreateListview('NewsView'),
    },
    {
      path: '/ask',
      name: 'ask',
      // component: AskView,
      component: CreateListview('AskView'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: JobsView,
      component: CreateListview('JobsView'),
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ],
});
