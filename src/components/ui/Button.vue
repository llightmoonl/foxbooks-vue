<script setup lang="ts">
  defineProps<{
    className: String,
    variant?: String,
  }>()
</script>


<template>
  <button
      :variant="variant"
  >
    <slot></slot>
  </button>
</template>

<style>

</style>