<template>
<!--  afficher les popup h24 pour up la hauteur-->
  <div
    class="tw-bg-thirdly tw-h-dvh"
  >
    <div
      class="tw-flex tw-flex-col tw-h-full tw-text-center tw-justify-center tw-items-center tw-text-white"
    >
      <div class="tw-bg-secondary tw-rounded-2.5xl tw-p-10 tw-w-4/5">
        <p class="tw-text-3xl tw-my-12">Mon parcours</p>
        <div class="tw-flex tw-justify-around tw-relative tw-mt-20 tw-w-full">
          <!--bar-->
          <div
            class="tw-absolute tw-top-1/2 tw-left-0 tw-right-0 tw-h-2 tw-bg-thirdly tw-rounded-full"
          ></div>
          <!--completed bar-->
          <div
            class="glowBar tw-absolute tw-top-1/2 tw-left-0 tw-right-0 tw-h-2 tw-w-10/12 tw-bg-primary tw-rounded-full"
          ></div>
          <!--circles-->
          <div
            v-for="(item, index) in roadMapContent"
            :key="index"
            class="tw-flex tw-flex-col tw-items-center tw-z-10"
          >
            <div
              :style="{ background: item.logoBg }"
              class="roadPoint tw-flex tw-w-16 tw-h-16 tw-rounded-full tw-items-center tw-justify-center tw-text-white tw-font-bold overflow-hidden"
            >
              <q-img
                fit="contain"
                :src="item.logo"
                alt="roadmap"
                class=""
              ></q-img>
              <div class="speechBubble tw-absolute tw-w-3/12 tw-top-full">
                <div class="triangle"></div>
                <div
                  class="tw-bg-secondary tw-w-full tw-rounded-2.5xl tw-p-3 -tw-mt-2 tw-border-black tw-border-[3px]"
                >
                  <h3 class="tw-text-xl tw-font-semibold">{{ item.name }}</h3>
                  <p class="tw-text-center tw-mt-2 tw-font-light">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import roadMapContent from 'src/data/roadMap'
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
  display: inline-block;
  height: 0;
  width: 0;
  position: relative;
  margin-top: 0.5rem;
  border-right: 30px solid transparent;
  border-bottom: 30px solid #000000;
  border-left: 30px solid transparent;
}

.triangle:before {
  content: '';
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  border-right: 30px solid transparent;
  border-bottom: 30px solid rgb(var(--tw-secondary));
  border-left: 30px solid transparent;
  top: 5px;
  right: -30px;
}

.glowBar {
  box-shadow:
    0 0 5px #00dfff,
    0 0 10px #00dfff,
    0 0 20px #00dfff,
    0 0 40px #00dfff;
}
</style>
