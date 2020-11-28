<template>
    <div class="threeBorder">
        <div class="threeItem">
            <p>正常border</p>
            <div class="trapezoid-base"></div>
        </div>
        <div class="threeItem">
            <p>border-top:none</p>
            <div class="trapezoid-none"></div>
        </div>
        <div class="threeItem">
            <p>border-top:transparent</p>
            <div class="trapezoid-transparent"></div>
        </div>
    </div>
</template>

<script>
export default {
    name :"threeBorder",
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

.threeBorder{
    height: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    .threeItem{
        flex:1;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .trapezoid-base{
            width: 100px;
            height: 100px;
            background-color: #fff7f7;
            border-top: 50px solid #204969;
            border-left: 50px solid #08ffc8;
            border-right: 50px solid #ff585d;
            border-bottom: 50px solid #ffb549;
        }
        .trapezoid-none{
            width: 100px;
            height: 100px;
            background-color: #fff7f7;
            border-top: none;
            border-left: 50px solid #08ffc8;
            border-right: 50px solid #ff585d;
            border-bottom: 50px solid #ffb549;
        }
        .trapezoid-transparent{
            width: 100px;
            height: 100px;
            background-color: #fff7f7;
            border-top: 50px solid transparent;
            border-left: 50px solid #08ffc8;
            border-right: 50px solid #ff585d;
            border-bottom: 50px solid #ffb549;
        }
    }
}
</style>