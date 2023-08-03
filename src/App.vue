<template>
    <div class="black-bg" v-if="isModal">
        <div class="white-bg">
            <img :src="data[clickId].image" style="width: 100%" />
            <h4>{{ data[clickId].title }}</h4>
            <p>{{ data[clickId].content }}</p>
            <p>{{ data[clickId].price }}원</p>
            <button @click="isModal = false">닫기</button>
        </div>
    </div>
    <div class="menu">
        <a v-for="(a, i) in menu" :key="i" href="">{{ a }}</a>
    </div>
    <h1>방찾기</h1>
    <div v-for="(a, i) in data" :key="i">
        <!-- <태그 v-for="a" in 몇회" :key="a">{{a}}</태그> -->
        <!-- <img src="./assets/room0.jpg" alt="" class="room-img" /> -->
        <!-- <img :src="require(`./assets/room${i}.jpg`)" alt="" class="room-img" /> -->
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
        <!--  v-on 축약: @ -->
        <!-- <button v-on:click="report++">허위매물신고</button> -->
        <!-- <button @click="report[i]++">허위매물신고</button> -->
        <!-- 클릭 이벤트에 함수 적용 -->
        <!-- <button @click="increase()">허위매물신고</button>  -->
        <!-- <span>신고수 : {{ report[i] }}</span> -->
    </div>
</template>

<script>
import data from './assets/data';

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
    },
    components: {},
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
.room-img {
    width: 100%;
    margin-top: 40px;
}
.black-bg {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    padding: 20px;
}
.white-bg {
    width: 100%;
    background: white;
    border-radius: 8px;
    padding: 20px;
}
</style>
