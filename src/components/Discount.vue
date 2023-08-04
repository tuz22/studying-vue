<template>
    <div class="discount">
        <h4>
            지금 결제시 20% 할인 <span>({{ second }}초 후 닫힘)</span>
        </h4>
    </div>
</template>

<script>
export default {
    name: 'Discount-banner',
    props: {
        second: Number,
    },
};
</script>

<style>
.discount {
    background: palevioletred;
    color: white;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}
</style>
