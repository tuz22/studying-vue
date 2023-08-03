<template>
    <div class="black-bg" v-if="isModal">
        <div class="white-bg">
            <img :src="data[clickId].image" style="width: 100%" />
            <h4>{{ data[clickId].title }}</h4>
            <p>{{ data[clickId].content }}</p>
            <p>{{ data[clickId].price }}원</p>
            <!-- <button @click="isModal = false">닫기</button> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal-product',
    props: {
        data: Array,
        isModal: Boolean,
        clickId: Number,
    },
};
</script>

<style>
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
