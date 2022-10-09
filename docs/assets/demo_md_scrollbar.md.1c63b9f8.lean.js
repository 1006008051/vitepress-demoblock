import{_ as C,c as a,d as l,a as n,o as D,e as o}from"./app.415f3d80.js";const B=JSON.parse('{"title":"Scrollbar \u6EDA\u52A8\u6761","description":"","frontmatter":{},"headers":[],"relativePath":"demo/md/scrollbar.md","lastUpdated":1665313517000}'),p={name:"demo/md/scrollbar.md"},E=n("",6);function F(A,e,t,r,c,y){const s=o("demo");return D(),a("div",null,[E,l(s,{src:"../component/scrollbar.vue",desc:"\u901A\u8FC7\u4F7F\u7528 `setScrollTop` \u4E0E `setScrollLeft` \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u624B\u52A8\u63A7\u5236\u6EDA\u52A8\u6761\u6EDA\u52A8\u3002",codeStr:"%3Ctemplate%3E%0D%0A%20%20%3Cel-scrollbar%20ref%3D%22scrollbarRef%22%20height%3D%22400px%22%20always%20%40scroll%3D%22scroll%22%3E%0D%0A%20%20%20%20%3Cdiv%20ref%3D%22innerRef%22%3E%0D%0A%20%20%20%20%20%20%3Cp%20v-for%3D%22item%20in%2020%22%20%3Akey%3D%22item%22%20class%3D%22scrollbar-demo-item%22%3E%0D%0A%20%20%20%20%20%20%20%20%7B%7B%20item%20%7D%7D%0D%0A%20%20%20%20%20%20%3C%2Fp%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%3C%2Fel-scrollbar%3E%0D%0A%0D%0A%20%20%3Cel-slider%0D%0A%20%20%20%20v-model%3D%22value%22%0D%0A%20%20%20%20%3Amax%3D%22max%22%0D%0A%20%20%20%20%3Aformat-tooltip%3D%22formatTooltip%22%0D%0A%20%20%20%20%40input%3D%22inputSlider%22%0D%0A%20%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7B%20onMounted%2C%20ref%20%7D%20from%20%22vue%22%3B%0D%0Aimport%20%7B%20ElScrollbar%20%7D%20from%20%22element-plus%22%3B%0D%0A%0D%0Aconst%20max%20%3D%20ref(0)%3B%0D%0Aconst%20value%20%3D%20ref(0)%3B%0D%0Aconst%20innerRef%20%3D%20ref%3CHTMLDivElement%3E()%3B%0D%0Aconst%20scrollbarRef%20%3D%20ref%3CInstanceType%3Ctypeof%20ElScrollbar%3E%3E()%3B%0D%0A%0D%0AonMounted(()%20%3D%3E%20%7B%0D%0A%20%20max.value%20%3D%20innerRef.value!.clientHeight%20-%20380%3B%0D%0A%7D)%3B%0D%0A%0D%0Aconst%20inputSlider%20%3D%20(value%3A%20number)%20%3D%3E%20%7B%0D%0A%20%20scrollbarRef.value!.setScrollTop(value)%3B%0D%0A%7D%3B%0D%0Aconst%20scroll%20%3D%20(%7B%20scrollTop%20%7D)%20%3D%3E%20%7B%0D%0A%20%20value.value%20%3D%20scrollTop%3B%0D%0A%7D%3B%0D%0Aconst%20formatTooltip%20%3D%20(value%3A%20number)%20%3D%3E%20%7B%0D%0A%20%20return%20%60%24%7Bvalue%7D%20px%60%3B%0D%0A%7D%3B%0D%0A%3C%2Fscript%3E%0D%0A%0D%0A%3Cstyle%20scoped%3E%0D%0A.scrollbar-demo-item%20%7B%0D%0A%20%20display%3A%20flex%3B%0D%0A%20%20align-items%3A%20center%3B%0D%0A%20%20justify-content%3A%20center%3B%0D%0A%20%20height%3A%2050px%3B%0D%0A%20%20margin%3A%2010px%3B%0D%0A%20%20text-align%3A%20center%3B%0D%0A%20%20border-radius%3A%204px%3B%0D%0A%20%20background%3A%20var(--el-color-primary-light-9)%3B%0D%0A%20%20color%3A%20var(--el-color-primary)%3B%0D%0A%7D%0D%0A.el-slider%20%7B%0D%0A%20%20margin-top%3A%2020px%3B%0D%0A%7D%0D%0A%3C%2Fstyle%3E%0D%0A",htmlStr:"%3Cpre%20class%3D%22shiki%22%20style%3D%22background-color%3A%20%23292D3E%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Eel-scrollbar%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3EscrollbarRef%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Eheight%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3E400px%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Ealways%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Escroll%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Escroll%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3EinnerRef%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Ev-for%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Eitem%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20in%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F78C6C%22%3E20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Ekey%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Eitem%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Eclass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Escrollbar-demo-item%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20item%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Eel-scrollbar%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Eel-slider%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Ev-model%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%20%20%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Emax%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Emax%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%20%20%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Eformat-tooltip%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3EformatTooltip%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%20%20%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Einput%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3EinputSlider%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%20%2F%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Ets%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3EonMounted%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Evue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3EElScrollbar%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Eelement-plus%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20max%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2382AAFF%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F78C6C%22%3E0%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20value%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2382AAFF%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F78C6C%22%3E0%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20innerRef%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2382AAFF%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FFCB6B%22%3EHTMLDivElement%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20scrollbarRef%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2382AAFF%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FFCB6B%22%3EInstanceType%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3Btypeof%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20ElScrollbar%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2382AAFF%22%3EonMounted%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Emax%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3EinnerRef%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E!.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3EclientHeight%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E-%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F78C6C%22%3E380%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20inputSlider%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FFCB6B%22%3Enumber%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3EscrollbarRef%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E!.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2382AAFF%22%3EsetScrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20scroll%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E(%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3EscrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3EscrollTop%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20formatTooltip%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FFCB6B%22%3Enumber%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3Ereturn%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%60%24%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3E%20px%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%60%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Escoped%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FFCB6B%22%3Escrollbar-demo-item%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Edisplay%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20flex%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Ealign-items%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20center%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Ejustify-content%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20center%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Eheight%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F78C6C%22%3E50px%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Emargin%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F78C6C%22%3E10px%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Etext-align%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20center%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Eborder-radius%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F78C6C%22%3E4px%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Ebackground%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2382AAFF%22%3Evar%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E--el-color-primary-light-9%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Ecolor%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2382AAFF%22%3Evar%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E--el-color-primary%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FFCB6B%22%3Eel-slider%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Emargin-top%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F78C6C%22%3E20px%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",description:"%E9%80%9A%E8%BF%87%E4%BD%BF%E7%94%A8%20%3Ccode%3EsetScrollTop%3C%2Fcode%3E%20%E4%B8%8E%20%3Ccode%3EsetScrollLeft%3C%2Fcode%3E%20%E6%96%B9%E6%B3%95%EF%BC%8C%E5%8F%AF%E4%BB%A5%E6%89%8B%E5%8A%A8%E6%8E%A7%E5%88%B6%E6%BB%9A%E5%8A%A8%E6%9D%A1%E6%BB%9A%E5%8A%A8%E3%80%82",codePath:"../demo/component/scrollbar.vue"})])}const u=C(p,[["render",F]]);export{B as __pageData,u as default};
