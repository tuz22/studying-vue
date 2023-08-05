import { createWebHistory, createRouter } from 'vue-router';
import Home from './components/Home.vue';
import List from './components/List.vue';
import Detail from './components/Detail.vue';
import Seller from './components/Seller.vue';
import Comment from './components/Comment.vue';

const routes = [
    {
        path: '/', // 이 경로로 접속하면
        component: Home, // 이 컴포넌트를 보여줌
    },
    {
        path: '/list',
        component: List,
    },
    {
        path: '/detail/:id', // URL 파라미터
        // path: '/detail/:id(\\d+)', // id에 정규식 사용 가능
        component: Detail,
        children: [
            {
                path: 'seller',
                component: Seller,
            },
            {
                path: 'comment',
                component: Comment,
            },
        ],
    },
    {
        path: '/:anyting(.*)', // 404 페이지
        component: Home,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
