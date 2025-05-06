<script setup lang="ts">
import { AppContainer, AppSlider } from '@/modules/app'
import { testSlide } from '@/assets/img'
</script>
<template>
  <section class="bg-white">
    <AppContainer>
      <!-- Зависит от задачи: не стал делать вертикальное отображение -- скрывается бОльшая часть изображения.  -->
      <AppSlider :slides-count="5" :items-to-show="1">
        <template #slide="{ index }">
          <img :src="testSlide" :key="index" alt="image" />
        </template>
      </AppSlider>
    </AppContainer>
  </section>
</template>
