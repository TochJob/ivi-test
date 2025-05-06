<script setup lang="ts">
import { LogoMain } from '@/assets/svg/index'

import type { HeaderNavigationItem } from './'
import { AppBasket } from '../app'

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
    <nav class="w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <LogoMain />

      <RouterLink
        v-for="item of navList"
        :to="item.to"
        :key="item.to"
        class="font-bold text-black text-xl hover:text-red-500 duration-300"
        >{{ item.name }}</RouterLink
      >

      <AppBasket />
    </nav>
  </header>
</template>
