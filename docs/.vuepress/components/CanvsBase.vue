<template>
    <div class="canvasDemo">
        <canvas id="drawing" width="200" height="200">A drawing of something.</canvas>
    </div>
</template>

<script>
export default {
    name :"canvasDemo",
    data() {
        return {

        }
    },
    components: {

    },
    mounted(){
        this.draw()
    },
    methods: {
        draw(){
            // 初始化上下文
            let drawing = document.querySelector('#drawing');
            let context = drawing.getContext('2d');

            /**
             * strokeStyle:描边颜色
             * fillStyle:填充颜色
             */

            /**
             * 矩形
             * fillRect:使用 fillStyle 的颜色填充绘制矩形
             * strokeRect:使用 strokeStyle 的颜色绘制矩形轮廓
             * clearRecn:擦除某片区域
             * 参数 （x, y, width, height）
             */
            // 绘制红色矩形
            context.fillStyle = "#ff0000";
            context.fillRect(10, 10, 50, 50);
            // 绘制半透明蓝色矩形
            context.fillStyle = "rgba(0,0,255,0.5)";
            context.fillRect(30, 30, 50, 50);

            // 绘制红色轮廓的矩形
            context.strokeStyle = "#ff0000";
            context.strokeRect(110, 10, 50, 50);
            // 绘制半透明蓝色轮廓的矩形
            context.strokeStyle = "rgba(0,0,255,0.5)";
            context.strokeRect(130, 30, 50, 50);
        }
    },
    
}
</script>

<style lang="scss">

.canvasDemo{
    
}
</style>