<script setup lang="ts">
import { AppContainer } from '../app'
import { FormSubscribe } from '../form'

const footerLinks: { title: string; link: string; type?: 'mail' }[] = [
  {
    title: 'Term of use',
    link: '#',
  },
  {
    title: 'hello@ivigreen.com',
    link: 'hello@ivigreen.com',
    type: 'mail',
  },
]
</script>
<template>
  <footer class="bg-white pt-24 pb-8">
    <AppContainer class="flex flex-col gap-8">
      <div class="bg-general rounded-2xl px-24 py-16">
        <FormSubscribe />
      </div>
      <div class="flex justify-between">
        <a
          class="text-general font-medium text-xl hover:text-general/60 duration-300"
          v-for="(item, index) of footerLinks"
          :key="index"
          :href="item.type ? `mailto:${item.link}` : item.link"
          >{{ item.title }}</a
        >
      </div>
    </AppContainer>
  </footer>
</template>
