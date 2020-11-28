<template>
    <div class="base">
        <div class="trapezoid-base"></div>
    </div>
</template>

<script>
export default {
    name :"Base",
    data() {
        return {

        }
    },
    methods: {

    },
    components: {

    }
}
</script>

<style scoped lang="less">

.base{
    .trapezoid-base{
        width: 100px;
        height: 100px;
        background-color: #fff7f7;
        border-top: 50px solid #204969;
        border-left: 50px solid #08ffc8;
        border-right: 50px solid #ff585d;
        border-bottom: 50px solid #ffb549;
    }
}
</style>