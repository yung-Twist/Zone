---
title: Vue 中使用 less 全局变量
date: 2020-12-24
categories:
 - Vue
tags:
 - less
publish: true
sidebar: auto 
isShowComments: true
# pageClass: customer-page-class
---

## 首先运行以下命令：
```
vue add style-resources-loader
```
::: danger 注意
是用 vue add 不是 yarn 或者 npm。自己使用yarn add 测试不可以。
:::

## 安装成功后，会在vue.config.js中生成以下代码
在 path 补充全局 less 的文件地址
```js
const path = require("path");//这一段需要自行添加
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, "src/style/global.less")//需要自行添加
      ]
    }
  }
}
```
然后就可以直接在所需的页面调用，无需引入
```css
.text {
    color: @main-color;
}
```