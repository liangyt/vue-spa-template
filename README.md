# vue-spa-template

> 基于 vue-cli 生成的多入口脚手架

## Build Setup

``` bash
# 安装依赖
npm install

# 服务启动热加载： localhost:8080
npm run dev

# 打包生产资源
npm run build
```

为了自已以后方便创建项目，搭建了该多入口开发的vue脚手架。

 1. 入口主要在 view 目录下，该目录下每个文件夹为一个入口，文件夹名称加上 .html 就是入口文件。
 2. 把vuex添加进来了，可以为每个入口处理一个vuex,不需要的话则不需要处理。
 3. 添加了 vue-route ，并参考vue-route 官网写了一下组件过渡效果。
