<script setup lang="ts">
import { LogoMain } from '@/assets/svg/index'

import type { HeaderNavigationItem } from './'

const navList: HeaderNavigationItem[] = [
  { name: 'Product', to: 'product' },
  {
    name: 'About ivi Green',
    to: 'about',
  },
  {
    name: 'FAQ',
    to: 'faq',
  },
  {
    name: 'For aducators',
    to: 'aducator',
  },
  {
    name: 'Blog',
    to: 'blog',
  },
]
</script>
<template>
  <header class="bg-white flex justify-center py-4">
    <div class="w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <nav class="flex justify-between items-center w-full">
        <LogoMain />

        <RouterLink
          v-for="item of navList"
          :to="item.to"
          :key="item.to"
          class="font-bold text-black text-xl"
          >{{ item.name }}</RouterLink
        >
      </nav>
    </div>
  </header>
</template>
