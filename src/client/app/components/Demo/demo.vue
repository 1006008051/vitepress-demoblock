<template>
  <ClientOnly>
    <article v-bind="$attrs" :class="['demo', layout]">
      <div class="demo-slot">
        <slot></slot>
      </div>

      <div class="demo-title-desc" v-show="title || desc">
        <span class="demo-title">{{ title }}</span>
        <span class="demo-desc">{{ desc }}</span>
      </div>

      <div class="demo-actions">
        <div class="demo-platforms">
          <OnlineEdit :content="decodedCodeStr" :importMap="importMap" v-show="src" />
        </div>
        <div class="demo-buttons">
          <div class="demo-actions-copy">
            <span v-show="showTip" class="demo-actions-tip">复制成功!</span>
            <copySvg v-show="!showTip" @click="copyCode" title="复制" />
          </div>
          <codeSvg class="demo-actions-expand" @click="toggleExpand()" title="展开" />
        </div>
      </div>
      <div
        v-show="expand"
        v-html="decodedHtmlStr"
        :class="`language-${language} extra-class`"
      />
    </article>
  </ClientOnly>
</template>

<script lang="ts">
import { computed, PropType } from "vue";
import "./demo.css";
import copySvg from "./icons/copy.vue";
import codeSvg from "./icons/code.vue";
import OnlineEdit from "./OnlineEdit";
import { useCopyCode } from "./useCopyCode";
import { useParseCode } from "./useParseCode";

export default {
  props: {
    src: String,
    componentName: String,
    htmlStr: String,
    codeStr: String,
    importMap: String,
    language: { default: "vue", type: String },
    platforms: {
      default: () => ["codepen"],
      type: Array,
    },
    jsLibsStr: { type: String, default: "[]" },
    cssLibsStr: { type: String, default: "[]" },
    title: { type: String, default: "" },
    desc: { type: String, default: "" },
    // 布局方式
    layout: {
      type: String as PropType<"horizontal" | "vertical">,
      default: "horizontal",
    },
  },
  components: {
    copySvg,
    codeSvg,
    OnlineEdit,
  },
  setup(props) {
    const decodedHtmlStr = computed(() => decodeURIComponent(props.htmlStr ?? ""));
    const decodedCodeStr = computed(() => decodeURIComponent(props.codeStr ?? ""));

    const { showTip, copyCode } = useCopyCode(decodedCodeStr.value);
    const { expand, toggleExpand, parsedCode } = useParseCode(
      decodedCodeStr.value,
      props.jsLibsStr,
      props.cssLibsStr
    );

    return {
      expand,
      toggleExpand,
      decodedHtmlStr,
      parsedCode,
      showTip,
      copyCode,
      decodedCodeStr,
    };
  },
};
</script>
