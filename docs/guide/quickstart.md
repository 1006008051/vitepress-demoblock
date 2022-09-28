# 快速上手
vitepress-demoblock 致力于为vitepress添加更专业的Demo演示能力

::: tip
在开始之前，推荐先学习 [vue](https://vuejs.org/) 和 [vitepress](https://vitepress.vuejs.org/)，并正确安装和配置了 Node.js v14 或以上。官方指南假设你已了解关于 vue 和 vitepress 的中级知识，并且已经完全掌握了 vue 的正确开发方式。
:::

## 安装

我们建议您使用包管理器 (NPM,[Yarn](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.io/) 安装  <code>vitepress-demoblock</code>
```sh
# 选择一个你喜欢的包管理器

# NPM
$ npm install vitepress-demoblock --save

# Yarn
$ yarn add vitepress-demoblock

# pnpm
$ pnpm install vitepress-demoblock
```

## 引入
先注册 <code>vitepress-demoblock</code> 提供的markdown解析插件
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
再引入 <code>vitepress-demoblock</code> 提供的demo组件
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
在md文件中使用
```
// demo.md
<demo src="./test.vue" lang="vue" desc="代码示例"></demo>
```

