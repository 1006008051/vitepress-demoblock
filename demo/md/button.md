# Button 按钮

常用的操作按钮。

## 基础用法

###### 输入
```
<demo src="../component/button.vue" desc="使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。"></demo>
```
###### 输出
<demo src="../component/button.vue" desc="使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。"></demo>

## 禁用状态

###### 输入
```
<demo src="../component/button-disabled.vue" desc="使用 `disabled`来定义按钮的禁用。"></demo>
```
###### 输出
<demo src="../component/button-disabled.vue" desc="使用 `disabled`来定义按钮的禁用。"></demo>

## 链接按钮

:::warning
`type="text"` 已被 废弃，将于版本 
3.0.0 时 移除，请考虑切换至新的 API。

新的 API `link` 于 
2.2.1 版本添加，同时可以使用 type API 设置链接按钮的主题样式。
:::

###### 输入
```
<demo src="../component/button-link.vue"></demo>
```
###### 输出
<demo src="../component/button-link.vue"></demo>

## 自定义颜色

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性额外配置尺寸，可使用 `large`和`small`两种值。
###### 输入
```
<demo src="../component/button-size.vue"></demo>
```
###### 输出
<demo src="../component/button-size.vue"></demo>

## Button 属性

| 属性名        | 说明           | 类型  |可选值  |默认值  |
| :------------- |:-------------| :-----|:-----|:-----|
| size     | 尺寸 | string|large / default /small|—|
| type     | 类型 | string|primary / success / warning / danger / info / text|—|
| round     | 是否为圆角按钮 | boolean|—|false|
| circle     | 是否为圆形按钮 | boolean|—|false|

