<script setup lang="ts">
import { IconCart } from '@/assets/svg'
import { useAppStore } from '../store'
import { computed } from 'vue'

const appStore = useAppStore()

const numberCartLength = computed(() => appStore.cartLength.toString().split('').length)

const textSizeClass = computed(() => {
  if (numberCartLength.value <= 2) return 'text-sm'
  if (numberCartLength.value <= 4) return 'text-xs'
  return 'text-[10px]'
})
</script>
<template>
  <div class="relative">
    <IconCart />
    <div
      class="bg-sucess text-white text-base absolute p-1 -top-1.5 text-center left-full -translate-x-4.5 min-w-6 min-h-6 max-w-6 max-h-6 flex items-center justify-center rounded-4xl"
      :class="textSizeClass"
    >
      <p class="pt-0.5">{{ appStore.cartLength }}</p>
    </div>
  </div>
</template>
