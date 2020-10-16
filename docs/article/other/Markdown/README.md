---
title: Markdown语法
date: 2020-10-16
public: true 
categories:
 - 其他
sidebar: auto
tags: 
- markdown
isShowComments: false
---
# Markdown语法

## 标题配置(Front Matter)
```md
---
title: 标题
date: 2019-08-08
categories:
 - 烹饪
 - 爱好
tags:
 - 标签一
publish: false // 是否发布，在博客列表显示。
sidebar: auto // 侧边栏
sticky: false // 置顶
isShowComments: true // 开启评价
---
```
## 基本语法

### 标题
```md
# 一级标题 ---> h1
## 二级标题 ---> h2
### 三级标题 ---> h3
...
```
### 换行
> 2个空格 = 换行

::: tip 示例
白日依山尽，
黄河如还留。  (空格)  
欲穷千里目，  (空格)  
更上一层楼。
:::

### 行内格式
```md
**加黑**  
*斜体*
~~删除线~~
```
::: tip 示例
正常  
**加黑**  
*斜体*  
~~删除线~~
:::

### 引用
```md
> 引用块段落一。
>
> 引用块段落二。
>> 内嵌引用块段落一。
>
> ### 引用块内的标题
```
::: tip 示例
> 引用块段落一。
>
> 引用块段落二。
>> 内嵌引用块段落一。
>
> ### 引用块内的标题
:::

### 超链接
```md
行内式 [百度](https://baidu.com)
引用试 [百度][1]

[1]: https://baidu.com "百度" // hover会显示
```
::: tip 示例
行内式 [百度](https://www.baidu.com)  
引用试 [百度][1]

[1]: https://www.baidu.com "百度"
:::

### 图片
> 在超链接的写法前加一个 !，就是引用图片的方法。
```md
![img](https://my-wechat.mdnice.com/logo.svg)
![avatar](/avatar.gif)
```
::: tip 示例
![img](https://my-wechat.mdnice.com/logo.svg)
![avatar](/avatar.gif)
:::

### 列表
```md
- 苹果
    - 红苹果
    - 青苹果
- 葡萄
- 榴莲

1. 苹果
2. 葡萄
3. 榴莲
```
::: tip 示例
- 苹果
    - 红苹果
    - 青苹果
- 葡萄
- 榴莲

1. 苹果
2. 葡萄
3. 榴莲
:::

### 代码块
    ```js  
    console.log(123)   
    ```

::: tip 示例
```js
console.log(123)  
```
:::

### 分割线
```md
***
-----
- - -
```
::: tip 示例
***
-----
- - -
:::

## 拓展语法

### 表格
```md
| 编号  | 姓名（左） | 年龄（右） | 性别（中） |
| ----- | :--------  | ---------: | :------:   |
| 0     | 张三       | 28         | 男         |
| 1     | 李四       | 29         | 男         |
```
::: tip 示例
| 编号  | 姓名（左） | 年龄（右） | 性别（中） |
| ----- | :--------  | ---------: | :------:   |
| 0     | 张三       | 28         | 男         |
| 1     | 李四       | 29         | 男         |
:::

### 任务列表
```md
- [x] 洗碗
- [ ] 清洗油烟机
- [ ] 拖地
```
::: tip 示例
- [x] 洗碗
- [ ] 清洗油烟机
- [ ] 拖地
:::

### 自动链接
```md
https://github.com

<https://github.com>
```
::: tip 示例
https://github.com

<https://github.com>
:::

## Vuepress 推展

### 内部连接
```md
[Home](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading](./#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->
[bar - three](../bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->
[bar - four](../bar/four.html) <!-- 也可以用 .html -->
```

### 外部链接
```md
[百度](http://www.baidu.com)
```
[百度](http://www.baidu.com)

### 自定义容器 
```md
::: tip 自定义的标题名
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```
::: tip 自定义的标题名
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details 查看更多
这是一个详情块，在 IE / Edge 中不生效
:::

