<template>
    <div class="menu">
        <a v-for="(a, i) in menu" :key="i" href="">
            <router-link :to="{ path: '' + a.link }">{{ a.title }}</router-link>
        </a>
    </div>

    <Discount v-if="showDiscount" :second="second" />
    <router-view :data="data"></router-view>
</template>

<script>
import Discount from './components/Discount.vue';
import menuData from './assets/menuData';
import data from './assets/data';

export default {
    name: 'App',
    data() {
        return {
            menu: menuData,
            data: data,
            report: [0, 0, 0],
            showDiscount: true,
            second: 20,
        };
    },
    methods: {
        increase() {
            // 버튼 클릭시 신고 수 증가
            this.report++;
        },
    },
    created() {
        if (this.showDiscount) {
            setInterval(() => {
                this.second--;
            }, 1000);
        }
    },
    mounted() {
        setTimeout(() => {
            this.showDiscount = false;
        }, 20000);
    },
    components: { Discount }, // {Discount: Discount} 이름:컴포넌트 같을때는 축약가능
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.menu {
    background: darkslateblue;
    padding: 15px;
    border-radius: 5px;
}
.menu a {
    color: white;
    padding: 10px;
}
.start {
    opacity: 0;
    transition: all 1s;
}
.end {
    opacity: 1;
}

/* transition fade */
.fade-enter-from {
    opacity: 0;
}
.fade-enter-active {
    transition: all 1s;
}
.fade-enter-to {
    opacity: 1;
}
.fade-leave-from {
    opacity: 1;
}
.fade-leave-active {
    transition: all 1s;
}
.fade-leave-to {
    opacity: 0;
}
</style>
