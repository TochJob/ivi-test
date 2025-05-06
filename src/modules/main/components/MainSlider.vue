<script setup lang="ts">
import { AppContainer, AppSlider } from '@/modules/app'
import { testSlide } from '@/assets/img'
</script>
<template>
  <section class="bg-white">
    <AppContainer>
      <AppSlider :slides-count="5" :items-to-show="1">
        <template #slide="{ index }">
          <img :src="testSlide" alt="" />
        </template>
      </AppSlider>
    </AppContainer>
  </section>
</template>
