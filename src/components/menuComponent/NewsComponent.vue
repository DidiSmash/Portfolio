<!--<template>-->
<!--  &lt;!&ndash; rework pas de points mais un truc plus responcive et qui joue avec le rond actualité ou une autre forme ex étoile &ndash;&gt;-->
<!--  <div class="tw-bg-thirdly tw-flex tw-h-dvh">-->
<!--    <div ref="container" class="tw-relative tw-w-2/5 tw-h-full"></div>-->
<!--    <div class="tw-flex tw-items-center tw-justify-center tw-w-1/5 tw-h-full">-->
<!--      <div class="tw-flex tw-justify-center tw-items-center tw-bg-black tw-text-white tw-text-2.5xl tw-border-4 tw-border-solid tw-border-white tw-rounded-full tw-w-1/2 circle responsive-text">Actualité</div>-->
<!--    </div>-->
<!--    <div ref="container2" class="tw-relative tw-w-2/5 tw-h-full"></div>-->

<!--    <NewsDetail-->
<!--      :newsItem="selectedNewsItem"-->
<!--      :isVisible="!!selectedNewsItem"-->
<!--      @close="selectedNewsItem = null"-->
<!--    />-->
<!--  </div>-->
<!--</template>-->






<template>
  <div class="tw-h-full tw-w-full tw-bg-thirdly tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-6">
    <h1 class="tw-text-3xl tw-font-bold tw-text-white tw-mb-4">Actualités et Workflow</h1>

    <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6 tw-w-full tw-max-w-6xl">
      <div class="tw-grid tw-grid-cols-2 tw-gap-4">
        <div
          v-for="event in news.actuality"
          :key="event.name"
          @click="selectedNewsItem = event"
          class="tw-p-4 tw-bg-secondary tw-rounded-lg tw-shadow-md hover:tw-shadow-lg hover:tw-scale-105 tw-transition-all"
        >
          <h2 class="tw-text-lg tw-font-semibold tw-text-white">{{ event.name }}</h2>
          <p class="tw-text-sm tw-text-gray-500 tw-mt-2">{{ event.description }}</p>
        </div>
      </div>

      <div class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-secondary tw-rounded-lg tw-shadow-md tw-p-6">
        <h2 class="tw-text-xl tw-font-semibold tw-text-white tw-mb-4">Mon Workflow</h2>
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="0"
          :navigation="{ nextEl: '.nextBtn', prevEl: '.prevBtn' }"
          class="tw-w-full tw-max-w-md">
            <swiper-slide v-for="(step, index) in news.workflow" :key="index">
              <div class="tw-flex tw-flex-col tw-items-center tw-text-center">
              <h3 class="tw-text-lg tw-font-bold tw-text-primary">{{ step.title }}</h3>
              <p class="tw-text-sm tw-text-gray-500 tw-mt-2">{{ step.description }}</p>
            </div>
          </swiper-slide>
          <q-btn round flat text-color="white" class="nextBtn tw-absolute tw-bg-black/35 tw-w-6 tw-h-6 tw-z-20 tw-top-1/2 tw--translate-y-1/2 tw-right-10"><q-icon name="arrow_forward_ios" size="2rem" class="tw-ml-1"></q-icon></q-btn>
          <q-btn round flat text-color="white" class="prevBtn tw-absolute tw-bg-black/35 tw-w-6 tw-h-6 tw-z-20 tw-top-1/2 tw--translate-y-1/2 tw-left-10"><q-icon name="arrow_back_ios" size="2rem" class="tw-ml-3"></q-icon></q-btn>
        </swiper>
      </div>
    </div>
        <NewsDetail
          :newsItem="selectedNewsItem"
          :isVisible="!!selectedNewsItem"
          @close="selectedNewsItem = null"
        />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import news from 'src/data/news.js';
import NewsDetail from 'components/menuComponent/modal/DetailNewsC.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from "swiper/modules";
import 'swiper/swiper-bundle.css';

const modules = [Navigation];
const selectedNewsItem = ref(null);
</script>

<style scoped>
/* Ajout de styles pour la mise en page */
</style>
