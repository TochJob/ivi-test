<script setup lang="ts">
import { LayoutFooter, LayoutHeader } from '.'
</script>

<template>
  <LayoutHeader />
  <main>
    <RouterView />
  </main>
  <LayoutFooter />
</template>
