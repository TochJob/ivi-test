<script setup lang="ts">
import type { TopicItem } from '../typos'

defineProps<{
  item: TopicItem
}>()
</script>
<template>
  <div
    class="flex min-w-full items-center gap-4 px-6 relative py-[26px] pl-28 border border-general rounded-full self-start md:h-auto h-[90px] w-fit"
  >
    <div
      class="bg-general absolute left-0 text-white rounded-full w-[90px] h-[90px] flex items-center justify-center shrink-0"
    >
      <component :is="item.image" />
    </div>
    <p class="text-general md:whitespace-nowrap md:text-3xl text-xl">{{ item.title }}</p>
  </div>
</template>
