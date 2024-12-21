<template>
  <!--rework pas dans une div pour faire plus grand -->
  <div
    class="md:tw-bg-thirdly tw-flex tw-flex-col tw-h-dvh tw-items-center tw-justify-center tw-pb-36 tw-text-white"
  >
    <div
      class="tw-flex tw-flex-col tw-items-center tw-bg-secondary sm:tw-h-full sm:tw-w-full md:tw-rounded-2.5xl md:tw-h-auto md:tw-w-auto"
    >
      <div class="tw-bg-primary tw-mt-16 tw-mr-96 tw-p-1 tw-px-2 tw-rounded-xl">
        <p class="tw-text-center tw-text-thirdly">
          Bonjour ! Je m’appelle <br /><span class="tw-font-bold"
        >killian tonione</span
        >
        </p>
      </div>

      <div class="tw-flex tw-flex-col tw-text-center tw-items-center">
        <p class="tw-text-2.5xl">
          Je suis <br /><span class="tw-font-bold">développeur fullstack</span>
        </p>
        <p class="tw-py-8 tw-w-1/2">
          Depuis 4 ans, je développe des petits bots, des sites web, des
          applications de bureau et mobiles ainsi que des petits jeux dans de
          nombreux langages.
        </p>
      </div>

      <q-btn
        rounded
        @click="handleMouseDown"
        class="tw-bg-primary tw-text-thirdly tw-mb-16"
      >En savoir plus</q-btn
      >
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["nextSlide"]);

function handleMouseDown() {
  setTimeout(() => {
    emit("nextSlide");
  }, 500);
}
</script>

<style scoped></style>
