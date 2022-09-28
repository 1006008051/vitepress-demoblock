<template>
  <div
    :class="['demo', hover && 'demo-hover']"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <!-- 组件展示 -->
    <div class="demo-slot">
      <component :is="demoSlot" />
    </div>
    <!-- 代码展示 -->
    <div class="demo-show" v-show="isExpanded">
      <!-- 描述 -->
      <div class="demo-show_desc" v-show="decodedDesc" v-html="decodedDesc"></div>
      <!-- 复制 -->
      <div class="demo-show-copy" @click.stop="onCopy"></div>
      <!-- 代码 -->
      <div
        :class="['demo-show-code', 'language-' + language]"
        v-html="decodedHtmlStr"
      ></div>
    </div>
    <!-- 按钮控制 -->
    <div class="demo-control" @click="onClickControl">
      <transition name="arrow-slide">
        <i
          :class="[
            'demo-control-icon',
            isExpanded ? 'demo-control-icon_up' : 'demo-control-icon_down',
          ]"
        ></i>
      </transition>
      <transition name="text-slide">
        <span v-show="hover" class="demo-control-tip">{{
          isExpanded ? "隐藏代码" : "显示代码"
        }}</span>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineAsyncComponent, ref } from "vue";
const timeoutIdMap = new Map();
export default {
  props: {
    codeStr: String,
    htmlStr: String,
    description: String,
    codePath: String,
    language: { default: "vue", type: String },
  },
  setup(props) {
    const hover = ref(false); //鼠标是否悬浮之上
    const decodedCodeStr = computed(() => decodeURIComponent(props.codeStr ?? ""));
    const decodedHtmlStr = computed(() => decodeURIComponent(props.htmlStr ?? ""));
    const decodedDesc = computed(() => decodeURIComponent(props.description ?? ""));
    // 注册演示组件
    const demoSlot = defineAsyncComponent(
      () => import(/* @vite-ignore */ props.codePath)
    );
    // 展开or收起代码
    const isExpanded = ref(false);
    const onClickControl = () => {
      isExpanded.value = !isExpanded.value;
      hover.value = isExpanded.value;
    };
    // 复制代码
    const onCopy = async (e) => {
      try {
        navigator.clipboard.writeText(decodedCodeStr.value);
        const el = e.target;
        el.classList.add("demo-show-copied");
        clearTimeout(timeoutIdMap.get(el));
        const timeoutId = setTimeout(() => {
          el.classList.remove("demo-show-copied");
          el.blur();
          timeoutIdMap.delete(el);
        }, 2000);
        timeoutIdMap.set(el, timeoutId);
      } catch (err) {
        console.log("复制代码失败");
      }
    };
    return {
      hover,
      demoSlot,
      isExpanded,
      decodedCodeStr,
      decodedHtmlStr,
      decodedDesc,
      onCopy,
      onClickControl,
    };
  },
};
</script>

<style lang="less">
.demo {
  margin: 10px 0;
  // demo边框
  border: solid 1px var(--vp-c-divider-light);
  border-radius: 3px;
  transition: 0.2s;
  &-hover {
    // 悬浮阴影
    box-shadow: var(--vp-shadow-2);
    .demo-control {
      // 控制按钮悬浮时的文字颜色
      color: var(--vp-c-brand);
      // 控制按钮悬浮时的背景色
      background-color: var(--vp-c-brand-dimm);
      &-icon {
        transform: translateX(-40px);
      }
    }
  }
  &-slot {
    box-sizing: border-box;
    padding: 24px;
    transition: 0.2s;
    overflow: auto;
  }
  &-show {
    position: relative;
    // 边框
    border-top: solid 1px var(--vp-c-divider-light);
    // 代码框背景色
    background-color: var(--vp-code-block-bg);
    &_desc {
      // 边框
      border: solid 1px var(--vp-c-divider-light);
      border-radius: 3px;
      padding: 20px;
      box-sizing: border-box;
      line-height: 26px;
      // 描述文字颜色
      color: var(--vp-c-text-2);
      word-break: break-word;
      margin: 10px 10px 6px 10px;
      // 描述文字框背景色
      background-color: var(--vp-c-bg-soft);
    }
    &-code {
      margin-bottom: 0 !important;
    }
    &-copy {
      position: absolute;
      right: 8px;
      z-index: 2;
      display: block;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      width: 40px;
      height: 40px;
      // 复制代码背景色
      background-color: var(--vp-code-block-bg);
      cursor: pointer;
      // 复制代码背景图片
      background-image: var(--vp-icon-copy);
      background-position: 50%;
      background-size: 20px;
      background-repeat: no-repeat;
      transition: opacity 0.25s;
    }
    &-copied {
      border-radius: 0 4px 4px 0;
      // 已复制代码背景色
      background-color: var(--vp-code-copy-code-hover-bg);
      // 已复制代码背景图片
      background-image: var(--vp-icon-copied);
      &:before {
        position: relative;
        left: -65px;
        display: block;
        border-radius: 4px 0 0 4px;
        padding-top: 8px;
        width: 64px;
        height: 40px;
        text-align: center;
        font-size: 12px;
        font-weight: 500;
        color: var(--vp-code-copy-code-active-text);
        background-color: var(--vp-code-copy-code-hover-bg);
        white-space: nowrap;
        content: "Copied";
      }
    }
    pre {
      margin: 0;
      padding: 1.25rem 1.5rem;
      background-color: inherit !important;
    }
  }
  &-control {
    // 控制按钮的边框
    border-top: 1px solid var(--vp-c-divider-light);
    height: 44px;
    box-sizing: border-box;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    // 控制按钮的文字颜色
    color: var(--vp-c-gray-light-2);
    cursor: pointer;
    position: relative;
    &-icon {
      display: inline-block;
      position: absolute;
      top: 50%;
      font-size: 16px;
      transition: 0.3s;
      &_up:before {
        content: "";
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-bottom: 7px solid;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -8.5px;
        margin-left: -6px;
      }
      &_down:before {
        content: "";
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-top: 7.5px solid;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -2px;
        margin-left: -6px;
      }
    }
    &-tip {
      position: absolute;
      transform: translateX(-30px);
      font-size: 14px;
      line-height: 44px;
      font-weight: 500;
      transition: 0.3s;
      display: inline-block;
    }
  }
  // 动画
  .text-slide-enter,
  .text-slide-leave-active {
    opacity: 0;
    transform: translateX(10px);
  }
}
</style>
