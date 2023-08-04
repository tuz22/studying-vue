<template>
    <div @click="$emit('openModal')">
        <img :src="data.image" alt="" class="room-img" />
        <h4>{{ data.title }}</h4>
        <p>{{ data.price }}원</p>
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
