import type { Component } from 'vue'

interface AdvantagesItem {
  title: string
  description: string
}
interface TopicItem {
  title: string
  image: Component
}

export type { AdvantagesItem, TopicItem }
