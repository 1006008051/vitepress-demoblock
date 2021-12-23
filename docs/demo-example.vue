<template>
  <div>
    <p>
      <span class="text">点击次数1:</span>
      <span>{{ count }}</span>
    </p>
    <button @click="onClick">count++++++</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
function onClick() {
  count.value++
}
</script>

<style>
.text {
  font-size: 14px;
}
</style>
