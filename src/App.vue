<template>
    <div class="menu">
        <a v-for="(a, i) in menu" :key="i" href="">{{ a }}</a>
    </div>
    <h1>방찾기</h1>
    <div v-for="(a, i) in products" :key="i">
        <!-- <태그 v-for="a" in 몇회" :key="a">{{a}}</태그> -->
        <h4 :style="titleStyle">{{ a }}</h4>
        <p>{{ price[i] }}만원</p>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            menu: ['Home', 'Products', 'About'],
            price: [30, 60, 40],
            products: ['A 원룸', 'B 원룸', 'C 원룸'],
            // titleStyle: 'color : blue', // HTML 속성도 데이터바인딩 가능
        };
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
</style>
