<script setup lang="ts">
import { AppButton, AppContainer, AppDescriptionItem, AppTitle } from '@/modules/app'
import { MainAdvantagesCard, type AdvantagesItem } from '..'

const advantagesList: AdvantagesItem[] = [
  {
    title: '40 000+',
    description: 'products sold all around the world',
  },
  {
    title: '1 000+',
    description: 'teachers use Ivi Green products',
  },
  {
    title: '30+',
    description: 'countries use our toolkits to effectively teach ',
  },
]

const descriptionList: AdvantagesItem[] = [
  {
    title: 'The challenges teachers are facing',
    description:
      'Teachers often face the challenge of spending extensive time searching for quality materials for their classes while students frequently approach them with more and more questions about their emotions, conflicts, self-organization methods, and family or friend relationships. The pandemic has exacerbated social-emotional problems among kids, making SEL one of the priorities for the school curriculum. Now even teachers specializing in subjects like math or language art need to incorporate social-emotional basics into their instructions.',
  },
  {
    title: 'Our solution',
    description:
      'Our toolkits provide teachers with practical, visual, science-based resources to effectively teach social and emotional learning to teens. Designed to enhance emotional intelligence and build resilience, Ivi Green educational toolkits offer structured activities, comprehensive guidelines, and ready-to-use materials that cater to the unique developmental needs of adolescents. Educators can foster a supportive learning environment that promotes emotional well-being and academic success by integrating these tools into their teaching.',
  },
]
</script>

<template>
  <section class="bg-white">
    <AppContainer class="flex flex-col items-center py-24 gap-8">
      <AppTitle>Why Ivi Green?</AppTitle>
      <div class="flex gap-3 items-start flex-col md:flex-row">
        <MainAdvantagesCard v-for="(item, index) of advantagesList" :key="index" :item="item" />
      </div>
      <div class="grid md:grid-cols-2 grid-cols-1 gap-5">
        <AppDescriptionItem v-for="(item, index) of descriptionList" :key="index" :item="item" />
      </div>
      <AppButton class="w-full md:w-fit">Show all kits</AppButton>
    </AppContainer>
  </section>
</template>
