<template>
  <div
    :class="['demo', hover && 'demo-hover']"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <!-- 组件展示 -->
    <div class="demo-slot">
      <slot v-if="hasSlot"></slot>
      <component :is="demoSlot" v-else-if="codePath" />
      <div v-html="decodedCodeStr" v-else></div>
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

<script>
import { computed, defineAsyncComponent, ref } from "vue";
// @ts-ignore
const modules = import.meta.glob("../../**/*.vue");
const timeoutIdMap = new Map();
export default {
  props: {
    codeStr: String,
    htmlStr: String,
    description: String,
    codePath: String,
    language: { default: "vue", type: String },
  },
  setup(props, content) {
    const { codePath, codeStr, htmlStr, description } = props;
    const { slots } = content;
    const hover = ref(false); //鼠标是否悬浮之上
    const hasSlot = computed(() => (slots?.default ? true : false));
    const decodedCodeStr = computed(() => decodeURIComponent(codeStr ?? ""));
    const decodedHtmlStr = computed(() => decodeURIComponent(htmlStr ?? ""));
    const decodedDesc = computed(() => decodeURIComponent(description ?? ""));
    // 注册演示组件
    const demoSlot =
      codePath && modules[codePath] ? defineAsyncComponent(modules[codePath]) : null;
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
      codePath,
      hasSlot,
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

<style scoped>
.demo {
  margin: 10px 0;
  border: solid 1px var(--vp-c-divider-light);
  border-radius: 3px;
  transition: 0.2s;
}

.demo-hover {
  box-shadow: var(--vp-shadow-2);
}

.demo-hover .demo-control {
  color: var(--vp-c-brand);
  background-color: var(--vp-c-brand-dimm);
}

.demo-hover .demo-control-icon {
  transform: translateX(-40px);
}

.demo-slot {
  box-sizing: border-box;
  padding: 24px;
  transition: 0.2s;
  overflow: auto;
}

.demo-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  align-items: center;
}

.demo-show {
  position: relative;
  border-top: solid 1px var(--vp-c-divider-light);
  background-color: var(--vp-code-block-bg);
}

.demo-show_desc {
  border: solid 1px var(--vp-c-divider-light);
  border-radius: 3px;
  padding: 20px;
  box-sizing: border-box;
  line-height: 26px;
  color: var(--vp-c-text-2);
  word-break: break-word;
  margin: 10px 10px 6px 10px;
  background-color: var(--vp-c-bg-soft);
}

.demo-show-code {
  margin-bottom: 0 !important;
}

.demo-show-copy {
  position: absolute;
  right: 8px;
  z-index: 2;
  display: block;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 40px;
  height: 40px;
  background-color: var(--vp-code-block-bg);
  cursor: pointer;
  background-image: var(--vp-icon-copy);
  background-position: 50%;
  background-size: 20px;
  background-repeat: no-repeat;
  transition: opacity 0.25s;
}

.demo-show-copied {
  border-radius: 0 4px 4px 0;
  background-color: var(--vp-code-copy-code-hover-bg);
  background-image: var(--vp-icon-copied);
}

.demo-show-copied:before {
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

.demo-show pre {
  margin: 0;
  padding: 1.25rem 1.5rem;
  background-color: inherit !important;
}

.demo-control {
  border-top: 1px solid var(--vp-c-divider-light);
  height: 44px;
  box-sizing: border-box;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  margin-top: -1px;
  color: var(--vp-c-gray-light-2);
  cursor: pointer;
  position: relative;
}

.demo-control-icon {
  display: inline-block;
  position: absolute;
  top: 50%;
  font-size: 16px;
  transition: 0.3s;
}

.demo-control-icon_up:before {
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

.demo-control-icon_down:before {
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

.demo-control-tip {
  position: absolute;
  transform: translateX(-30px);
  font-size: 14px;
  line-height: 44px;
  font-weight: 500;
  transition: 0.3s;
  display: inline-block;
}

.demo .text-slide-enter,
.demo .text-slide-leave-active {
  opacity: 0;
  transform: translateX(10px);
}
</style>
