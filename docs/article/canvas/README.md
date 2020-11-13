---
title: canvas基础
date: 2020-11-12
public: true 
categories:
 - canvas
sidebar: auto
tags: 
- canvas h5
isShowComments: false
---
# canvas基础

## 创建上下文
```html
<canvas id="drawing" width="200" height="200">A drawing of something.</canvas>
```
```js
let drawing = document.querySelector('#drawing');
let context = drawing.getContext('2d');
```
## 填充和描边
- 填充(strokeStyle)  
```js
context.strokeStyle = "red";
```
- 描边(fillStyle)  
```js
context.fillStyle = "#0000ff";
```
## 绘制矩形
> **fillRect** : 使用 fillStyle 的颜色填充绘制矩形  
> **strokeRect** : 使用 strokeStyle 的颜色绘制矩形轮廓  
> **clearRect** : 擦除某片区域  
> 参数 （x, y, width, height）矩形 x 坐标、矩形 y 坐标、矩形宽度和矩形高度
```js
// 绘制红色矩形
context.fillStyle = "#ff0000";
context.fillRect(10, 10, 50, 50);

// 绘制半透明蓝色轮廓的矩形
context.strokeStyle = "rgba(0,0,255,0.5)";
context.strokeRect(30, 30, 50, 50);
```

## 绘制路径
要绘制路径，必须首先调用 **beginPath()** 方法以表示要开始绘制新路径。然后，再调用下列方法来绘制路径。
> - **arc**(x, y, radius, startAngle, endAngle, counterclockwise)：以坐标(x, y)为圆
心，以 radius 为半径绘制一条弧线，起始角度为 startAngle，结束角度为 endAngle（都是
弧度）。最后一个参数 counterclockwise 表示是否逆时针计算起始角度和结束角度（默认为
顺时针）
> - **arcTo**(x1, y1, x2, y2, radius)：以给定半径 radius，经由(x1, y1)绘制一条从上一点
到(x2, y2)的弧线。
> - **lineTo**(x, y)：绘制一条从上一点到(x, y)的直线。
> - **moveTo**(x, y)：不绘制线条，只把绘制光标移动到(x, y)。
> - **rect**(x, y, width, height)：以给定宽度和高度在坐标点(x, y)绘制一个矩形。这个方法
与 strokeRect()和 fillRect()的区别在于，它创建的是一条路径，而不是独立的图形。
> - **bezierCurveTo**(c1x, c1y, c2x, c2y, x, y)：以(c1x, c1y)和(c2x, c2y)为控制点，
绘制一条从上一点到(x, y)的弧线（三次贝塞尔曲线）。
> - **quadraticCurveTo**(cx, cy, x, y)：以(cx, cy)为控制点，绘制一条从上一点到(x, y)
的弧线（二次贝塞尔曲线）。
> - **closePath**()方法绘制一条返回起点的线

**如果路径已经完成，则既可以指定 fillStyle 属性并调用 fill()方法来填充路径，也可以指定 strokeStyle 属性并调用stroke()方法来描画路径**

## 绘制文本
fillText()和 strokeText()。这两个方法都接收 4 个参数：要绘制的字符串、 x 坐标、 y 坐标和可选的最大像素宽度,而且，这两个方法最终绘制的结果都取决于以下 3 个属性。
> - **font**：以 CSS 语法指定的字体样式、大小、字体族等，比如"10px Arial"。
> - **textAlign**：指定文本的对齐方式，可能的值包括"start"、 "end"、 "left"、 "right"和"center"。
> - **textBaseLine**： 指 定 文 本 的 基 线 ， 可 能 的 值 包 括 "top" 、 "hanging" 、 "middle" 、"alphabetic"、 "ideographic"和"bottom"。

## 变换
> -  **rotate**(angle)：围绕原点把图像旋转 angle 弧度。
> - **scale**(scaleX, scaleY)：通过在 x 轴乘以 scaleX、在 y 轴乘以 scaleY 来缩放图像。 scaleX和 scaleY 的默认值都是 1.0。
> - **translate**(x, y)：把原点移动到(x, y)。执行这个操作后，坐标(0, 0)就会变成(x, y)。

## 绘制图像
```js
let image = document.images[0];
context.drawImage(image, 10, 10);
```
以上代码获取了文本中的第一个图像，然后在画布上的坐标(10, 10)处将它绘制了出来。绘制出来的
图像与原来的图像一样大。如果想改变所绘制图像的大小，可以再传入另外两个参数：目标宽度和目标
高度。这里的缩放只影响绘制的图像，不影响上下文的变换矩阵。比如下面的例子：
```js
context.drawImage(image, 50, 10, 20, 30);
```
执行之后，图像会缩放到 20 像素宽、 30 像素高。  
还可以只把图像绘制到上下文中的一个区域。此时，需要给 drawImage()提供 9 个参数：要绘制
的图像、源图像 x 坐标、源图像 y 坐标、源图像宽度、源图像高度、目标区域 x 坐标、目标区域 y 坐标、
目标区域宽度和目标区域高度。这个重载后的 drawImage()方法可以实现最大限度的控制，比如：
```js
context.drawImage(image, 0, 10, 50, 50, 0, 100, 40, 60);
```

## 阴影
> - **shadowColor**： CSS 颜色值，表示要绘制的阴影颜色，默认为黑色。
> - **shadowOffsetX**：阴影相对于形状或路径的 x 坐标的偏移量，默认为 0。
> - **shadowOffsetY**：阴影相对于形状或路径的 y 坐标的偏移量，默认为 0。
> - **shadowBlur**：像素，表示阴影的模糊量。默认值为 0，表示不模糊。
```js
let context = drawing.getContext("2d");
// 设置阴影
context.shadowOffsetX = 5;
context.shadowOffsetY = 5;
context.shadowBlur = 4;
context.shadowColor = "rgba(0, 0, 0, 0.5)";
// 绘制红色矩形
context.fillStyle = "#ff0000";
context.fillRect(10, 10, 50, 50);
// 绘制蓝色矩形
context.fillStyle = "rgba(0,0,255,1)";
context.fillRect(30, 30, 50, 50);
```

## 渐变
### 线性渐变
```js
let gradient = context.createLinearGradient(30, 30, 70, 70);
gradient.addColorStop(0, "white");
gradient.addColorStop(1, "black");
```
这个 gradient 对象现在表示的就是在画布上从(30, 30)到(70, 70)绘制一个渐变。渐变的起点颜色
为白色，终点颜色为黑色。可以把这个对象赋给 fillStyle 或 strokeStyle 属性，从而以渐变填充
或描画绘制的图形：
```js
// 绘制红色矩形
context.fillStyle = "#ff0000";
context.fillRect(10, 10, 50, 50);
// 绘制渐变矩形
context.fillStyle = gradient;
context.fillRect(30, 30, 50, 50);
```
### 径向渐变
径向渐变（或放射性渐变）要使用 createRadialGradient()方法来创建。这个方法接收 6 个参
数，分别对应两个圆形圆心的坐标和半径。前 3 个参数指定起点圆形中心的 x、 y 坐标和半径，后 3 个参
数指定终点圆形中心的 x、 y 坐标和半径。
```js
let gradient = context.createRadialGradient(55, 55, 10, 55, 55, 30);
gradient.addColorStop(0, "white");
gradient.addColorStop(1, "black");
// 绘制红色矩形
context.fillStyle = "#ff0000";
context.fillRect(10, 10, 50, 50);
// 绘制渐变矩形
context.fillStyle = gradient;
context.fillRect(30, 30, 50, 50);
```
## 图案
图案是用于填充和描画图形的重复图像。要创建新图案，可以调用 createPattern()方法并传入
两个参数：一个 HTML <img>元素和一个表示该如何重复图像的字符串。第二个参数的值与 CSS 的
background-repeat 属性是一样的，包括"repeat"、 "repeat-x"、 "repeat-y"和"no-repeat"。
比如：
```js
let image = document.images[0],
pattern = context.createPattern(image, "repeat");
// 绘制矩形
context.fillStyle = pattern;
context.fillRect(10, 10, 150, 150);
```
## 图像数据
## 合成
2D 上下文中绘制的所有内容都会应用两个属性： globalAlpha 和 globalComposition Operation，
其中， globalAlpha 属性是一个范围在 0~1 的值（包括 0 和 1），用于指定所有绘制内容的透明度，默认值为0.如果所有后来的绘制都需要使用同样的透明度，那么可以将 globalAlpha 设置为适当的值，执行绘制，然后再把 globalAlpha 设置为 0。比如：
```js
// 绘制红色矩形
context.fillStyle = "#ff0000";
context.fillRect(10, 10, 50, 50);
// 修改全局透明度
context.globalAlpha = 0.5;
// 绘制蓝色矩形
context.fillStyle = "rgba(0,0,255,1)";
context.fillRect(30, 30, 50, 50);
// 重置
context.globalAlpha = 0;
```
globalCompositionOperation 属性表示新绘制的形状如何与上下文中已有的形状融合。这个属
性是一个字符串，可以取下列值。
> - source-over：默认值，新图形绘制在原有图形上面。
> - source-in：新图形只绘制出与原有图形重叠的部分，画布上其余部分全部透明。
> - source-out：新图形只绘制出不与原有图形重叠的部分，画布上其余部分全部透明。
> - source-atop：新图形只绘制出与原有图形重叠的部分，原有图形不受影响。
> - destination-over： 新图形绘制在原有图形下面，重叠部分只有原图形透明像素下的部分可见。
> - destination-in：新图形绘制在原有图形下面，画布上只剩下二者重叠的部分，其余部分完全
透明。
> - destination-out：新图形与原有图形重叠的部分完全透明，原图形其余部分不受影响。
> - destination-atop：新图形绘制在原有图形下面，原有图形与新图形不重叠的部分完全透明。
> - lighter：新图形与原有图形重叠部分的像素值相加，使该部分变亮。
> - copy：新图形将擦除并完全取代原有图形。
> - xor：新图形与原有图形重叠部分的像素执行“异或”计算。
```js
// 绘制红色矩形
context.fillStyle = "#ff0000";
context.fillRect(10, 10, 50, 50);
// 设置合成方式
context.globalCompositeOperation = "destination-over";
// 绘制蓝色矩形
context.fillStyle = "rgba(0,0,255,1)";
context.fillRect(30, 30, 50, 50);
```
[Demo](/article/canvas/demo.md)
