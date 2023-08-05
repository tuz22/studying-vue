<template>
    <!-- {{ $route.params.id }} // 파라미터 id 불러오기 -->
    <div>
        <h4>상세페이지</h4>
        <img :src="data[$route.params.id].image" alt="" style="width: 100%" />
        <h5>{{ data[$route.params.id].title }}</h5>
        <p>{{ data[$route.params.id].content }}</p>
        <p>{{ data[$route.params.id].price }}원</p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Detail-component',
    props: {
        data: Array,
    },
};
</script>

<style></style>
