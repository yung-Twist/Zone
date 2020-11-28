---
title: 如何用CSS画梯形
date: 2020-11-28
categories:
 - CSS
tags:
 - 梯形
publish: true
sidebar: auto 
isShowComments: true
---
# 如何用CSS画梯形
## 基本的border

<CSS-Trapezoid-Base/>  
<br>

```html
<div class="trapezoid-base"></div>
.trapezoid-base{
    width: 100px;
    height: 100px;
    background-color: #fff7f7;
    border-top: 50px solid #204969;
    border-left: 50px solid #08ffc8;
    border-right: 50px solid #ff585d;
    border-bottom: 50px solid #ffb549;
}
```
## 少了一边的border
<CSS-Trapezoid-ThreeBorder/>

## 直角梯形
<CSS-Trapezoid-Right/>
```html
<div class="trapezoid-1"></div>
<div class="trapezoid-2"></div>
<div class="trapezoid-3"></div>
<div class="trapezoid-4"></div>
<div class="trapezoid-5"></div>
<div class="trapezoid-6"></div>
<div class="trapezoid-7"></div>
<div class="trapezoid-8"></div>
```
```css
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
```
::: warning 注意
以上都是基于在 box-size: content-box 上实现的。  
box-sizing: content-box; //width或height，只是content的宽度和高度，不包括padding和border。  
box-sizing: border-box; //width或height，包含文本的宽度高度，以及padding和border。
:::