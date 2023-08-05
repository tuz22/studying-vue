<template>
    <transition name="fade">
        <Modal @closeModal="isModal = false" :data="data" :isModal="isModal" :clickId="clickId" />
    </transition>
    <h4>원룸 리스트 페이지</h4>
    <button @click="priceSort()">가격순정렬</button>
    <button @click="sortBack()">정렬초기화</button>
    <div v-for="(a, i) in data" :key="i">
        <Card @openModal="isModal = true" :data="data[i]" />
    </div>
</template>

<script>
import data from './../assets/data';
import Card from './Card.vue';
import Modal from './Modal.vue';

export default {
    name: 'List-products',
    data() {
        return {
            isModal: false,
            data: data,
            originData: [...data], // array/object 데이터의 사본을 만들 때 [...array자료]
            clickId: 0,
        };
    },
    methods: {
        priceSort() {
            this.data.sort(function (a, b) {
                return a.price - b.price;
            });
        },
        sortBack() {
            this.data = [...this.originData];
        },
    },
    components: { Card, Modal },
};
</script>

<style></style>
