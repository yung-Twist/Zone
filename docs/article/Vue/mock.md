---
title: Vue中使用mock
date: 2020-12-24
tags:
 - mock
 - axios
 - proxy
publish: true
sidebar: auto 
isShowComments: true
# pageClass: customer-page-class
---
# Vue
> 本文主要介绍如何在 Vue 中使用 MockJS,通过 proxy 代理实现本地数据模拟和服务端 api 一起使用
## 引入mock
### 安装mockjs
```
yarn add mockjs -S
```
### 创建mockjs.ts，并且引入mockjs
```
import Mock from 'mockjs'
```
### 因为ts无法识别mockjs，所以在shim.d.ts末尾添加
```
declare module 'mockjs'
```
### 在mockjs中加上一条数据
```js
Mock.mock('/api/list','get',{"data":[
	{
		"id":"1",
		"title":"title"
	}
]})
```
### main.ts中引入
```
import './api/mock'
```
然后就可以像平常使用接口一样的使用啦

## 配置 proxy
> 在 vue.config.js 中添加如下配置,将访问 /github 接口的地址代理为 target 

```js
devServer: {
    proxy: {
        '/github':{
            target:'https://api.github.com',
            changeOrigin: true,
            pathRewrite:{
                '^/github': ''
            }
        }
    }
},
```
::: tip 举例
当 axios 访问 **github/users** 时, 实际的请求地址会变成 **https://api.github.com/users**
:::

::: warning 注意
axios 中的 baseUrl 不要配置，否则 mock 会失效
:::
[mock官网](http://mockjs.com/)