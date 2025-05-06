<script setup lang="ts">
import { AppContainer, AppTitle } from '@/modules/app'
import { MainTopicsItem, type TopicItem } from '..'
import {
  IconConfidence,
  IconGrowth,
  IconIntelligence,
  IconRelationship,
  IconSkill,
} from '@/assets/svg'

const topicsList: TopicItem[] = [
  {
    image: IconRelationship,
    title: 'Relationships',
  },
  {
    image: IconSkill,
    title: 'Skills development',
  },
  {
    image: IconGrowth,
    title: 'Growth mindset',
  },
  {
    image: IconIntelligence,
    title: 'Emotional intelligence',
  },
  {
    image: IconConfidence,
    title: 'Self-esteem and confidence',
  },
]
</script>
<template>
  <section class="bg-white md:py-24 py-12">
    <AppContainer class="flex flex-col gap-8">
      <AppTitle>The most in-demand topics</AppTitle>
      <div class="grid md:grid-cols-12 gap-6 auto-rows-auto">
        <MainTopicsItem
          v-for="(item, index) in topicsList"
          :key="index"
          :item="item"
          class="col-span-4"
          :class="{
            'md:col-start-2 md:row-start-2': index === 3,
            'md:col-start-7 md:row-start-2': index === 4,
          }"
        />
      </div>
    </AppContainer>
  </section>
</template>
