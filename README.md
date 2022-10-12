<div align="center">
	<h1 align="center">vitepress-demoblock</h1>
</div>
<p>&emsp;&emsp;为vitepress添加更专业的Demo演示能力，让您在开发vue组件库或者vue相关文档编写时，可以通过引入vue文件的时候结果显示和代码演示。</p>

## 文档

[官方文档](https://1006008051.github.io/vitepress-demoblock) | [快速上手](https://1006008051.github.io/vitepress-demoblock/demo/guide/quickstart.html) | [组件演示](https://1006008051.github.io/vitepress-demoblock/demo/md/button.html)

## 安装

我们建议您使用包管理器 (NPM,[Yarn](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.io/) 安装  <code>vitepress-demoblock</code>
```
# 选择一个你喜欢的包管理器

# NPM
$ npm install vitepress-demoblock --save

# Yarn
$ yarn add vitepress-demoblock

# pnpm
$ pnpm install vitepress-demoblock
```


## 引入
先注册 `vitepress-demoblock` 提供的markdown解析插件
```js
// .vitepress/config.ts or .vitepress/config.js
import demoblock from 'vitepress-demoblock';
export default {
    // ...
        markdown: {
            // ...
            config: (md) => {
                md.use(demoblock)
            }
    },
}
```
再引入 `vitepress-demoblock` 提供的demo组件
```js
// .vitepress/theme/index.ts or .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'; //引入默认主题
import demo from 'vitepress-demoblock/demo.vue'
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('demo', demo)
    }
```
## 使用

###### 输入
```
<demo src="../component/button.vue" desc="使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。"></demo>
```
###### 输出
![demo演示](https://1006008051.github.io/vitepress-demoblock/demo.png)
