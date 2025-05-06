<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import {
  Carousel,
  Slide,
  Pagination as CarouselPagination,
  Navigation as CarouselNavigation,
} from 'vue3-carousel'

// Значения по умолчанию
const props = withDefaults(
  defineProps<{
    slidesCount?: number
    itemsToShow?: number
  }>(),
  {
    slidesCount: 10,
    itemsToShow: 2.5,
  },
)

const carouselConfig = {
  itemsToShow: props.itemsToShow,
  wrapAround: true,
}
</script>

<template>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="n in props.slidesCount" :key="n">
      <slot name="slide" :index="n" />
    </Slide>

    <template #addons>
      <CarouselNavigation class="md:!block !hidden">
        <template v-for="dir in ['prev', 'next']" :key="dir" #[dir]>
          <span class="bg-sucess min-w-20 min-h-20 flex items-center justify-center rounded-full"
            ><svg
              :class="{ 'rotate-180': dir === 'next' }"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
            >
              <path
                d="M1.28186 8.115C1.37603 8.01833 1.73161 7.605 2.06283 7.265C4.00471 5.12667 9.07047 1.62667 11.7219 0.558333C12.1245 0.386667 13.1426 0.0233333 13.6865 0C14.2077 0 14.7045 0.12 15.1786 0.363333C15.7696 0.703333 16.2437 1.23833 16.5035 1.87C16.6707 2.30833 16.9305 3.62 16.9305 3.64333C17.1903 5.07833 17.3332 7.41 17.3332 9.98667C17.3332 12.4417 17.1903 14.6783 16.9776 16.135C16.9532 16.1583 16.6935 17.7883 16.4093 18.3467C15.8881 19.3667 14.8701 20 13.7806 20H13.6865C12.9769 19.975 11.4848 19.3417 11.4848 19.3183C8.97629 18.2483 4.02744 14.92 2.03848 12.7083C2.03848 12.7083 1.47832 12.14 1.23478 11.785C0.854846 11.275 0.666504 10.6433 0.666504 10.0117C0.666504 9.30667 0.879201 8.65 1.28186 8.115Z"
                fill="white"
              />
            </svg>
          </span>
        </template>
      </CarouselNavigation>

      <CarouselPagination class="block md:!hidden" />
    </template>
  </Carousel>
</template>
<style>
.carousel__pagination {
  bottom: -20px;
}

.carousel__pagination-button {
  background: #32cd7a20 !important;
  width: 12px;
  height: 12px;
  border-radius: 50% !important;
  bottom: -20px;
}

.carousel__pagination-button--active {
  background: #32cd7a !important;
}
</style>
