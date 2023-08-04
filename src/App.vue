<template>
    <!-- <div class="start" :class="{ end: isModal }">
        <Modal @closeModal="isModal = false" :data="data" :isModal="isModal" :clickId="clickId" />
    </div> -->
    <transition name="fade">
        <Modal @closeModal="isModal = false" :data="data" :isModal="isModal" :clickId="clickId" />
    </transition>
    <div class="menu">
        <a v-for="(a, i) in menu" :key="i" href="">{{ a }}</a>
    </div>
    <Discount />
    <button @click="priceSort()">가격순정렬</button>
    <button @click="sortBack()">정렬초기화</button>
    <h1>방찾기</h1>
    <div v-for="(a, i) in data" :key="i">
        <Card @openModal="isModal = true" :data="data[i]" />
    </div>
    <!-- <div v-for="(a, i) in data" :key="i">
        <태그 v-for="a" in 몇회" :key="a">{{a}}</태그>
        <img src="./assets/room0.jpg" alt="" class="room-img" />
        <img :src="require(`./assets/room${i}.jpg`)" alt="" class="room-img" />
        <img :src="a.image" alt="" class="room-img" />
        <h4
            @click="
                isModal = true;
                clickId = a.id;
            "
            :style="titleStyle"
        >
            {{ data[i].title }}
        </h4>
        <p>{{ a.price }}원</p>
            v-on 축약: @
        <button v-on:click="report++">허위매물신고</button>
        <button @click="report[i]++">허위매물신고</button>
        클릭 이벤트에 함수 적용
        <button @click="increase()">허위매물신고</button> 
        <span>신고수 : {{ report[i] }}</span>
    </div> -->
</template>

<script>
import data from './assets/data';
import Discount from './components/Discount.vue';
import Modal from './components/Modal.vue';
import Card from './components/Card.vue';

export default {
    name: 'App',
    data() {
        return {
            menu: ['Home', 'Products', 'About'],
            price: [30, 60, 40],
            products: ['A 원룸', 'B 원룸', 'C 원룸'],
            report: [0, 0, 0],
            isModal: false,
            data: data,
            originData: [...data], // array/object 데이터의 사본을 만들 때 [...array자료]
            clickId: 0,
            // report: 0,
            // titleStyle: 'color : blue', // HTML 속성도 데이터바인딩 가능
        };
    },
    methods: {
        increase() {
            // 버튼 클릭시 신고 수 증가
            this.report++;
        },
        priceSort() {
            this.data.sort(function (a, b) {
                return a.price - b.price;
            });
        },
        sortBack() {
            this.data = [...this.originData];
        },
    },
    components: { Discount, Modal, Card }, // {Discount: Discount} 이름:컴포넌트 같을때는 축약가능
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
