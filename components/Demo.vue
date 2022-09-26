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
      <!-- 代码 -->
      <div v-html="decodedHtmlStr"></div>
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
      <!-- 复制代码 -->
      <div class="demo-control-copy">
        <transition name="text-slide">
          <span v-show="isExpanded" class="demo-control-copy_text" @click.stop="onCopy">
            复制代码
          </span>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineAsyncComponent, ref } from "vue";
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
    const onCopy = async () => {
      try {
        navigator.clipboard.writeText(decodedCodeStr.value);
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
  border: solid 1px #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  &-hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
    .demo-control {
      color: var(--c-brand);
      background-color: #f9fafc;
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
    border-top: solid 1px #ebebeb;
    background-color: var(--vp-code-block-bg);
    &_desc {
      border: solid 1px #ebebeb;
      border-radius: 3px;
      padding: 20px;
      box-sizing: border-box;
      line-height: 26px;
      color: var(--c-text);
      word-break: break-word;
      margin: 10px 10px 6px 10px;
      background-color: #fff;
    }
    pre {
      margin: 0;
      padding: 1.25rem 1.5rem;
    }
  }
  &-control {
    border-top: solid 1px #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
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
    &-copy {
      line-height: 43px;
      position: absolute;
      top: 0;
      right: 0;
      padding-left: 5px;
      padding-right: 25px;
      &_text {
        padding: 13px 0;
        color: rebeccapurple;
        font-size: 14px;
        font-weight: 500;
        margin: 0 10px;
      }
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
