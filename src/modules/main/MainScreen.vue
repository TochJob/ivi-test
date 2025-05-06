<script setup lang="ts">
import { mainDesktop, mainMobile } from '@/assets/img'
import { AppButton } from '../app'

const advantagesList = [
  'Engaging activities for classroom and home use',
  'Ready-to-use materials for SEL classes',
  'Comprehensive guidelines for educators',
]
</script>
<template>
  <section class="bg-general py-9 flex items-center justify-center">
    <div
      class="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
    >
      <!-- Left column -->
      <div class="flex flex-col gap-6">
        <h2 class="text-3xl md:text-4xl font-bold leading-tight text-white md:w-5/6">
          SOCIAL-EMOTIONAL LEARNING TOOLKITS AND SOFT SKILLS FOR EDUCATORS
        </h2>
        <p class="text-base md:text-3xl text-white md:w-3/4">
          Fostering emotional intelligence and progressive mindset in teen students
        </p>

        <img :src="mainMobile" class="md:hidden block" alt="mainImage" />

        <ul class="md:hidden block list-disc pl-5 text-white space-y-2 text-base leading-relaxed">
          <li v-for="(item, index) of advantagesList" :key="index">{{ item }}</li>
        </ul>

        <AppButton>Show all kits</AppButton>
      </div>

      <!-- Right column -->
      <div class="md:block hidden">
        <img :src="mainDesktop" alt="mainImage" />
      </div>
    </div>
  </section>
</template>
