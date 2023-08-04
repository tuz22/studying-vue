<template>
    <div class="black-bg" v-if="isModal">
        <div class="white-bg">
            <img :src="data[clickId].image" style="width: 100%" />
            <h4>{{ data[clickId].title }}</h4>
            <p>{{ data[clickId].content }}</p>
            <!-- event : 자바스크립트에서 e랑 같음 -->
            <!-- <input @input="month = $event.target.value" /> -->
            <!-- 위 코드 축약버전 -->
            <input v-model="month" />
            <p>{{ month }}개월 선택함 : {{ month * data[clickId].price }}원</p>
            <button @click="$emit('closeModal')">닫기</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal-product',
    data() {
        return {
            month: 1,
        };
    },
    watch: {
        month(a, b) {
            // a: month 데이터, b: 변경 전 데이터
            // isNaN: is Not a Number
            if (isNaN(a) == true) {
                alert('문자입력금지');
                this.month = 1;
                console.log('이전데이터:', b);
            }
        },
    },
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
