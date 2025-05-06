<script setup lang="ts">
import { LogoMain } from '@/assets/svg/index'

import type { HeaderNavigationItem } from './'
import { AppBasket } from '../app'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

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

const router = useRouter()
const isMobileMenuOpen = ref(false)

function moveToBasket() {
  router.push('/basket')
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>
<template>
  <header class="bg-white flex justify-center py-4 px-4 relative">
    <nav class="w-full max-w-6xl flex items-center justify-between">
      <RouterLink to="/"><LogoMain /></RouterLink>

      <RouterLink
        v-for="item of navList"
        :to="item.to"
        :key="item.to"
        class="font-bold text-black text-xl hidden md:block hover:text-red-500 duration-300"
        >{{ item.name }}</RouterLink
      >

      <div class="flex items-center gap-4">
        <AppBasket @click="moveToBasket" />
        <button
          class="md:hidden relative flex flex-col gap-1 bg-general py-3.5 px-2 rounded-xl"
          @click="toggleMobileMenu"
        >
          <span
            v-for="(item, index) of 3"
            :key="index"
            class="w-6 h-0.5 bg-white rounded-2xl duration-300"
            :class="{
              'opacity-0': isMobileMenuOpen && index === 1,
              'rotate-45 translate-y-1.5': isMobileMenuOpen && index === 0,
              '-rotate-45 -translate-y-1.5': isMobileMenuOpen && index === 2,
            }"
          ></span>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden absolute top-28 left-0 w-full bg-white shadow-md flex flex-col items-start px-4 py-4 z-50"
    >
      <RouterLink
        v-for="item of navList"
        :to="item.to"
        :key="item.to"
        class="py-2 text-lg font-bold text-black w-full hover:text-red-500"
        @click="isMobileMenuOpen = false"
      >
        {{ item.name }}
      </RouterLink>
    </div>
  </header>
</template>
