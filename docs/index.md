---
home: true
heroImage: /logo.svg
heroText: Meri UI
tagline: 一套基于「梅里雪山」设计系统的 Vue3 组件库
actionText: 开始
actionLink: /guide/
altActionText: 了解更多
altActionLink: /guide/why
features:
  - title: 🔥 超多组件
    details: 全面拥抱vue3
  - title: ⚡️ 使用TypeScript
    details: 所有组件使用TypeScript进行编写
  - title: 💡 主题可调
    details: 使用原生css定义主题
footer: Meri UI · Made by Persagy
---

| 名称 | 类型 | 可选值                 | 默认值   | 说明 |
| :--- | :--- | :-------------------- | :----- | :----- |
| color | String   | 颜色名 / RGB / 十六进制 / hsl |  #8d9399    |文本头像的颜色|
| bgColor | String   | 颜色名 / RGB / 十六进制 / hsl |  #eff0f1    |文本头像的背景色|
| fontSize | Number   |  |  14    |文本头像的大小|
| radius | String   |  |  100%    |圆角大小|
| src | String   |  |  undefined    |图片头像的资源地址	|
| size | String   | small / medium / large |  undefined    |图片头像的大小	|
| fit | String   | fill / contain / cover / none / scale-down  |  fill    |头像的图片在容器内的的适应类型	|

<script setup>
  import { onMounted } from 'vue'
  onMounted=(()=>{
    debugger
    console.log(123456789);
  })
</script>