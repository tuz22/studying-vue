<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
        <h1>방찾기</h1>
        <h4 :style="titleStyle">A 원룸</h4>
        <!-- HTML 속성은 : 붙여서 -->
        <p>{{ price1 }}만원</p>
        <!-- 데이터바인딩 시 {{ 가져올 자료이름 }} -->
    </div>
    <div>
        <h4>{{ products[1] }}</h4>
        <p>{{ price2 }}만원</p>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            price1: 30,
            price2: 60,
            products: ['A 원룸', 'B 원룸', 'C 원룸'],
            titleStyle: 'color : blue', // HTML 속성도 데이터바인딩 가능
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
    margin-top: 60px;
}
</style>
