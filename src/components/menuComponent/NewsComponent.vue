<template>
  <p class="tw-text-2.5xl tw-my-5 tw-text-center tw-text-white">Veille technologique</p>

  <div class="tw-h-full tw-w-full tw-flex tw-flex-col tw-items-center tw-p-6 tw-mt-20">
    <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6 tw-w-full tw-max-w-6xl">
      <div class="tw-grid tw-grid-cols-2 tw-gap-4">
        <div
          v-for="event in news.actuality"
          :key="event.name"
          @click="event.image ? null : (selectedNewsItem = event)"
          class="tw-p-2 tw-bg-secondary tw-rounded-lg tw-shadow-md hover:tw-shadow-lg hover:tw-scale-105 tw-transition-all tw-cursor-pointer"
        >
          <q-img v-if="event.image" :src="event.image" class="tw-rounded-lg" @click="selectedImg = event.image"/>
          <div v-else class="tw-p-4">
            <h2 class="tw-text-lg tw-font-semibold tw-text-white">{{ event.name }}</h2>
            <p class="tw-text-sm tw-text-gray-500 tw-mt-2">{{ event.description }}</p>
            <p class="tw-text-white">{{ selectedImg }}</p>
          </div>
        </div>
      </div>

      <div>
        <div
          class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-secondary tw-rounded-lg tw-shadow-md tw-p-6 tw-mb-4"
        >
          <h2 class="tw-text-xl tw-font-semibold tw-text-white tw-mb-4">Étapes</h2>
          <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            :navigation="{ nextEl: '.nextBtn', prevEl: '.prevBtn' }"
            class="tw-w-full tw-max-w-md"
          >
            <swiper-slide v-for="(step, index) in news.workflow" :key="index">
              <div class="tw-flex tw-flex-col tw-items-center tw-text-center">
                <h3 class="tw-text-lg tw-font-bold tw-text-primary">{{ step.title }}</h3>
                <p class="tw-text-sm tw-text-gray-500 tw-mt-2 tw-px-24">{{ step.description }}</p>
                <div v-if="step.tools" class="tw-flex tw-flex-wrap tw-justify-evenly">
                  <div v-for="theStep in step.tools" :key="theStep.id" class="tw-h-full tw-mx-3">
                    <a :href="theStep.link" target="_blank">
                      <q-img
                        fit="contain"
                        :src="theStep.icons"
                        alt="parallax1"
                        class="tw-h-full tw-w-full tw-rounded-2.5xl tw-mt-3 tw-p-5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <q-btn
              round
              flat
              text-color="white"
              class="nextBtn tw-absolute tw-bg-black/35 tw-w-6 tw-h-6 tw-z-20 tw-top-1/2 tw--translate-y-1/2 tw-right-10"
              ><q-icon name="arrow_forward_ios" size="2rem" class="tw-ml-1"></q-icon
            ></q-btn>
            <q-btn
              round
              flat
              text-color="white"
              class="prevBtn tw-absolute tw-bg-black/35 tw-w-6 tw-h-6 tw-z-20 tw-top-1/2 tw--translate-y-1/2 tw-left-10"
              ><q-icon name="arrow_back_ios" size="2rem" class="tw-ml-3"></q-icon
            ></q-btn>
          </swiper>
        </div>

        <div class="tw-grid tw-grid-cols-2 tw-gap-4">
          <div
            v-for="(detail, index) in news.details"
            :key="index"
            class="tw-p-2 tw-bg-secondary tw-rounded-lg tw-shadow-md hover:tw-shadow-lg hover:tw-scale-105 tw-transition-all tw-cursor-pointer"
          >
            <q-img
              :src="detail.image"
              alt="parallax1"
              class="tw-rounded-lg"
              @click="selectedImg = detail.image"
            />
          </div>
        </div>
      </div>
    </div>

    <NewsDetail
      :newsItem="selectedNewsItem"
      :isVisible="!!selectedNewsItem"
      @close="selectedNewsItem = null"
    />

    <ImageZoomC
      :image="selectedImg"
      :isVisible="!!selectedImg"
      :modeProject="false"
      @close="selectedImg = null"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import news from 'src/data/news.js'
import NewsDetail from 'components/menuComponent/modal/DetailNewsC.vue'
import ImageZoomC from 'components/menuComponent/modal/ImageZoomC.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

const modules = [Navigation]

const selectedNewsItem = ref(null)
const selectedImg = ref(null)
</script>

<style scoped></style>
