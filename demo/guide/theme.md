# 定制主题

vitepress-demoblock 的样式和 vitepress 完全一致，你可以参考 [vitepress](https://vitepress.vuejs.org/) 的定制方式进行配置。


## vitepress-demoblock 的样式变量

vitepress-demoblock 的样式使用了 [Less](https://lesscss.org/) 作为开发语言，结合 vitepress 定义的一系列全局/组件的样式变量，你可以根据需求进行相应调整。

以下是vitepress-demoblock用到的样式变量，所有样式变量可以在 [这里](https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css) 找到。

```less
--vp-c-divider-light:rgba(60, 60, 60, 0.12);  // 边框颜色
--vp-shadow-2:0 3px 12px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.07);// 悬浮阴影
--vp-c-brand:#42b883;// 控制按钮悬浮时的文字颜色
--vp-c-brand-dimm:rgba(100, 108, 255, 0.08);// 控制按钮悬浮时的背景色
--vp-c-text-2:rgba(60, 60, 60, 0.7);// desc文字颜色
--vp-c-bg-soft:#f9f9f9;//desc框背景色
--vp-c-gray-light-2: #c7c7c7; //展开代码or收起代码 文字颜色
```
## 定制方式
建立一个单独的 css 变量文件，引入这个文件覆盖 vitepress 里的变量。
```js
// .vitepress/theme/index.ts or .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'; //引入默认主题
import demo from 'vitepress-demoblock/demo.vue';
import 'your-theme-vars.css';
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('demo', demo)
    }
```
## 使用暗黑主题
vitepress默认提供的有暗黑主题和亮色主题两种模式，如果需要动态的定制暗黑主题，可以把对应的样式变量添加到
```css
/* 暗黑者主题的样式变量 */
.dark{
    
}
```