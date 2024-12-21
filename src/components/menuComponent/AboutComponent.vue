<template>
  <!-- rework les 3, c'est trop "basique" ils ce ressemble trop entre eux-->
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    :navigation="{ nextEl: '.nextBtn', prevEl: '.prevBtn' }"
    touch-events-target="container"
    :loop="true"
    class="tw-bg-thirdly tw-h-dvh"
  >

    <swiper-slide>
      <div class="tw-flex tw-flex-col tw-h-full tw-text-center tw-justify-center tw-items-center tw-text-white">
        <div class="tw-bg-secondary tw-rounded-2.5xl tw-w-1/2 tw-p-8">
          <p class="tw-text-2xl tw-my-10">A propos</p>
          <div class="tw-flex tw-place-content-around">
            <p class="tw-py-8 tw-text-lg">Je suis étudiant en première année de BTS SIO à Vienne. Depuis 4 ans, je développe des petits bots, des sites web, des applications de bureau et mobiles ainsi que des petits jeux dans différents langages. J'aime la créativité et la liberté de la programmation, et j'aimerais continuer dans cette voie pour ma carrière professionnelle.</p>
          </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="tw-flex tw-flex-col tw-h-full tw-text-center tw-justify-center tw-items-center tw-text-white">
        <div class="tw-bg-secondary tw-rounded-2.5xl tw-p-8 tw-w-1/2">
          <p class="tw-text-2xl tw-my-10">A propos</p>
          <div class="tw-flex tw-justify-around tw-relative tw-mt-20 tw-w-full">
            <!--bar-->
            <div class="tw-absolute tw-top-1/2 tw-left-0 tw-right-0 tw-h-1 tw-bg-thirdly tw-rounded-full"></div>
            <!--completed bar-->
            <div class="glowBar tw-absolute tw-top-1/2 tw-left-0 tw-right-0 tw-h-1 tw-w-10/12 tw-bg-primary tw-rounded-full"></div>
            <!--circles-->
            <div v-for="(item, index) in roadMapContent" :key="index" class="tw-flex tw-flex-col tw-items-center tw-z-10">
              <div class="roadPoint tw-flex tw-w-10 tw-h-10 tw-bg-primary tw-rounded-full tw-items-center tw-justify-center tw-text-white tw-font-bold overflow-hidden">
                <q-img fit="contain" :src="item.logo" alt="roadmap" class="tw-w-full tw-h-auto"></q-img>
                <div class="speechBubble tw-absolute tw-w-3/12 tw-top-full">
                  <div class="triangle"></div>
                  <div class="tw-bg-secondary tw-w-full tw-rounded-2.5xl tw-p-3 -tw-mt-2 tw-border-black tw-border-[3px]">
                    <h3 class="tw-text-xl tw-font-semibold">{{ item.name }}</h3>
                    <p class="tw-text-center tw-mt-2 tw-font-light">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="tw-flex tw-flex-col tw-h-full tw-text-center tw-justify-center tw-items-center tw-text-white">
        <div class="tw-bg-secondary tw-rounded-2.5xl tw-w-1/2 tw-p-8">
          <p class="tw-text-2xl tw-my-10">A propos</p>
          <div class="tw-flex tw-place-content-center tw-py-5">
            <div class="tw-text-lg tw-mr-10 tw-bg-gray-500 tw-w-1/6 tw-rounded-2.5xl">
              <q-img src="src/assets/png/CV.png" alt="CV" class="tw-w-full tw-h-full tw-rounded-2.5xl"></q-img>
            </div>
            <div class="tw-py-8 tw-text-lg tw-ml-10">
              <a href="src/assets/pdf/CV.pdf" target="_blank">
                <q-btn rounded no-caps class="tw-bg-primary tw-text-thirdly tw-my-2.5">Voir en pdf</q-btn>
              </a>
              <br>
              <a href="src/assets/pdf/CV.pdf" download="CV">
                <q-btn rounded no-caps class="tw-bg-primary tw-text-thirdly tw-my-2.5">Télécharger</q-btn>
              </a>
            </div>
          </div>
        </div>

      </div>
    </swiper-slide>

    <q-btn round flat text-color="white" class="nextBtn tw-absolute tw-bg-black/35 tw-w-16 tw-h-16 tw-z-20 tw-top-1/2 tw--translate-y-1/2 tw-right-32"><q-icon name="arrow_forward_ios" size="2rem" class="tw-ml-1"></q-icon></q-btn>
    <q-btn round flat text-color="white" class="prevBtn tw-absolute tw-bg-black/35 tw-w-16 tw-h-16 tw-z-20 tw-top-1/2 tw--translate-y-1/2 tw-left-32"><q-icon name="arrow_back_ios" size="2rem" class="tw-ml-3"></q-icon></q-btn>
  </swiper>
</template>

<script setup>
// Import Swiper Vue.js components
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/vue';

import roadMapContent from "src/data/roadMap";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const modules = [Navigation];
</script>

<style scoped>
.speechBubble {
  opacity: 0;
  transition: opacity 0.3s ease;
  visibility: hidden;
}
.roadPoint:hover .speechBubble {
  opacity: 1;
  visibility: visible;
}

.triangle {
  display : inline-block;
  height : 0;
  width : 0;
  position: relative;
  margin-top: 0.5rem;
  border-right : 30px solid transparent;
  border-bottom : 30px solid #000000;
  border-left : 30px solid transparent;
}

.triangle:before {
  content : "";
  display : block;
  width : 0;
  height : 0;
  position : absolute;
  border-right : 30px solid transparent;
  border-bottom : 30px solid rgb(var(--tw-secondary));
  border-left : 30px solid transparent;
  top: 5px;
  right : -30px;
}

.glowBar {
  box-shadow: 0 0 5px #00dfff, 0 0 10px #00dfff, 0 0 20px #00dfff, 0 0 40px #00dfff;
}
</style>
