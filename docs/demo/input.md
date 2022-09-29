# Input 输入框
通过鼠标或键盘输入字符

:::warning
Input 为受控组件，它 总会显示 Vue 绑定值。

在正常情况下，input 的输入事件应该被正常响应。 它的处理程序应该更新组件的绑定值 (或使用 v-model)。 否则，输入框的值将不会改变。

不支持 v-model 修饰符。
:::

## 基础用法
###### 输入
```
<demo src="../component/input.vue"></demo>
```
###### 输出
<demo src="../component/input.vue"></demo>