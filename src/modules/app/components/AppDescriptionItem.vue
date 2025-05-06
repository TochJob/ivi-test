<script setup lang="ts">
import type { AdvantagesItem } from '@/modules/main'

defineProps<{
  item: AdvantagesItem
}>()
</script>
<template>
  <div class="flex flex-col gap-2.5 bg-custom-gray p-10 rounded-2xl">
    <h3 class="text-general font-medium md:text-3xl text-xl w-4/6 md:w-full">{{ item.title }}</h3>
    <p class="text-black text-base font-normal">{{ item.description }}</p>
  </div>
</template>
