<template>
<div class="Right">
    <div class="trapezoid-1">
    </div>
    <div class="trapezoid-2">
    </div>
    <div class="trapezoid-3">
    </div>
    <div class="trapezoid-4">
    </div>
    <div class="trapezoid-5">
    </div>
    <div class="trapezoid-6">
    </div>
    <div class="trapezoid-7">
    </div>
    <div class="trapezoid-8">
    </div>
</div>
</template>

<script>
export default {
    name: "Right",
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

<style lang="less" scoped>
.Right {
    .trapezoid-1 {
        display: inline-block;
        height: 25px;
        border-top: 25px solid transparent;
        border-left: 50px solid #ff585d;
        border-bottom: none;
        border-right: none;
    }

    .trapezoid-2 {
        display: inline-block;
        height: 25px;
        border-top: 25px solid transparent;
        border-right: 50px solid #ff585d;
        border-bottom: none;
        border-left: none;
    }

    .trapezoid-3 {
        display: inline-block;
        height: 25px;
        border-top: none;
        border-left: 50px solid #ff585d;
        border-bottom: 25px solid transparent;
        border-right: none;
    }

    .trapezoid-4 {
        display: inline-block;
        height: 25px;
        border-top: none;
        border-left: none;
        border-bottom: 25px solid transparent;
        border-right: 50px solid #ff585d;
    }

    .trapezoid-5 {
        display: inline-block;
        width: 25px;
        border-top: none;
        border-left: none;
        border-bottom: 50px solid #ff585d;
        border-right: 25px solid transparent;
    }

    .trapezoid-6 {
        display: inline-block;
        width: 25px;
        border-top: none;
        border-left: 25px solid transparent;
        border-bottom: 50px solid #ff585d;
        border-right: none;
    }

    .trapezoid-7 {
        display: inline-block;
        width: 25px;
        border-top: 50px solid #ff585d;
        border-left: 25px solid transparent;
        border-bottom: none;
        border-right: none;
    }

    .trapezoid-8 {
        display: inline-block;
        width: 25px;
        border-top: 50px solid #ff585d;
        border-left: none;
        border-bottom: none;
        border-right: 25px solid transparent;
    }
}
</style>
