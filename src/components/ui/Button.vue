<script setup lang="ts">
  import clsx from 'clsx';

  defineProps<{
    className?: String,
    variant?: String,
  }>()

</script>

<template>
  <button
      :variant = "variant"
      :class = "clsx([
          'button',
          className,
          {
            ['button__secondary']: variant == 'secondary',
            ['button__tertiary']: variant == 'tertiary',
            ['button__ghost']: variant == 'ghost',
            ['button__outline']: variant == 'outline'
          }
      ])"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang = "scss">
.button{
  border: 2px solid $black-color;
  background-color: $black-color;
  color: white;
  padding: 10px 32px;
  border-radius: 14px;
  font-weight: 900;
  cursor: pointer;
  &:hover{
    background-color: $primary-color;
    border-color: $primary-color;
    color: $white-color;
  }
  &__outline{
    color: $black-color;
    background-color: transparent;
    border: 2px solid $black-color;
  }
}
</style>