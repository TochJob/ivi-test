<script setup lang="ts">
import type { AdvantagesItem } from '../'

defineProps<{
  item: AdvantagesItem
}>()
</script>
<template>
  <div class="flex flex-col gap-2.5 text-center md:max-w-72 mx-auto">
    <h3 class="text-sucess font-bold text-6xl">{{ item.title }}</h3>
    <p class="text-black text-xl font-medium md:w-5/6 w-10/12 mx-auto">{{ item.description }}</p>
  </div>
</template>
