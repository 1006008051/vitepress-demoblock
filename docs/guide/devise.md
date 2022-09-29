# 简介
vitepress-demoblock 致力于为vitepress添加更专业的Demo演示能力

::: tip
在开始之前，推荐先学习 [vue](https://vuejs.org/)、[vite](https://cn.vitejs.dev/)和 [vitepress](https://vitepress.vuejs.org/)，并正确安装和配置了 Node.js v14 或以上。官方指南假设你已了解关于 vue 和 vitepress 的中级知识，并且已经完全掌握了 vitepress 的正确开发方式。
:::
## 背景

vitepress 本质上是一个 vite 插件，使用它开发的文档网站效果相当于 vue3 + vite 的 ssr 项目，它在内部帮你把所有逻辑都封装好了，你只需要写 markdown 就行。

vitepress 凭借着 vite 的秒级启动速度、markdown-it 的强大扩展能力、天然支持 vue3 在文档圈迅速流行开来，使用 vitepress 做 vue3 组件库文档也已经非常流行。

下面是一个基于vitepress的demo示例：

##### Input
```
<span v-for="i in 3">{{ i }}</span>
```
##### Output
<span v-for="i in 3">{{ i }}</span>

在写文档的时候我们却要写两遍，一遍用来展示代码文字，一遍用来展示代码结果。这只是一行代码，如果我们在开发组件库或者大型vue组件时，代码可能成千百行，这样显得就很繁琐，且容易出错。

## 解决方案

你所写的 markdown 文档最终都会转成 vue 组件。其原理很简单：把 markdown 渲染成 html 字符串，然后动态生成一个 vue 组件，模版内容就是渲染好的 html 字符串。所以它支持在 markdown 里运行 vue 组件顺理成章。目前已有的解决方案也都是基于markdown插件进行着手的。
##### vitepress-demoblock

对比其他实现方案：

##### element-plus
element-plus 使用 [markdown-it-container](https://github.com/markdown-it/markdown-it-container#readme) 创建了一个自定义容器，使用方式类似于：

```md
::: demo
alert/demo.vue
:::
```
这里的 ::: 是容器的边界，demo 是容器名字，它的内容是 alert/demo.vue，element-plus 会去指定目录读取这个文件，然后渲染成一个 vue 组件，连同其文件内容呈现在（文档网站）页面上。

##### vitepress-for-component
vitepress-for-component 则采用了另一种方式：
```md
<demo
  src="./demo-example.vue"
  language="vue"
  title="Demo演示"
  desc="这是一个Demo渲染示例"
/>
```
其基本原理也是基于 [markdow-it](https://markdown-it.docschina.org/) 插件：

```js
export const demoPlugin = (md: MarkdownIt) => {
  const RE = /<demo /i;

  md.renderer.rules.html_inline = (tokens, idx) => {
    const content = tokens[idx].content;
    // ...
    if (RE.test(content.trim())) {
      // ...
      const { realPath, urlPath, importMap } = md as any;
      const absolutePath = path
        .resolve(realPath ?? urlPath, '../', src)
        .split(path.sep)
        .join('/');

      // ...
      return content.replace(
        '>',
        ` componentName="${componentName}" htmlStr="${htmlStr}" codeStr="${encodeURIComponent(codeStr)}" ${
          importMap ? `importMap="${encodeURIComponent(JSON.stringify(importMap))}"` : ''
        } >
        <${componentName}></${componentName}>
        `,
      );
    } else {
      return content;
    }
  };
};
```

可以看出，这是自定义了 html 渲染，如果 html 标签是 demo 的话，就修改成自己想要的样子, 但是这里会有一个问题demo组件里如果还有script引入的资源将无法处理且 vitepress-for-component 是 fork vitepress 的，后期vipress升级之后，一些改动会变的很繁琐。所以vitepress-demoblock采用非fork的形式开发。
