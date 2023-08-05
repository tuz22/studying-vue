<template>
    <div @click="$emit('openModal')">
        <img :src="data.image" alt="" class="room-img" />
        <h4>{{ data.title }}</h4>
        <p>{{ data.price }}원</p>
    </div>
    <div>
        <p @click="$router.push('/detail/' + data.id)">상세페이지 이동</p>
        <!-- $router.go(1): 앞으로가기 -->
        <!-- $router.go(-1): 뒤로가기 -->
    </div>
</template>

<script>
export default {
    name: 'Card-products',
    props: {
        data: Object,
    },
};
</script>

<style>
.room-img {
    width: 100%;
    margin-top: 40px;
}
</style>
