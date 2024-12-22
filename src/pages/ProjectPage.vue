<template>
  <q-page class="tw-bg-thirdly tw-text-white">
    <div class="tw-flex tw-py-16">
      <div class="tw-flex tw-flex-col tw-w-2/5 tw-ml-32 tw-items-center">
        <div class="tw-relative tw-w-1/2 tw-h-80 tw-p-1 tw-z-10">
          <q-img
            fit="contain"
            :src="project.logo"
            alt="parallax1"
            :style="{ background: project.logoBg }"
            class="tw-h-full tw-w-full tw-rounded-2.5xl"
          />
        </div>
        <div class="tw-w-1/2">
          <div class="tw-flex tw-flex-wrap tw-items-baseline">
            <p class="tw-text-lg tw-mt-2">Langages :</p>
            <div
              v-for="language in languages()"
              :key="language.id"
              :style="{
                color: language.color
              }"
              class="tw-h-1/2 tw-p-1 tw-mx-2 tw-my-1"
            >
              #{{ language.name }}
            </div>
          </div>
          <p v-if="company" class="tw-text-lg tw-mt-2">
            Entreprise :
            <span v-if="company"
                  :style="{
                color: company.color
                }"
                  class="tw-text-sm tw-p-1"
            >
                @{{ company.name }}
              </span>
          </p>
          <div class="tw-w-full tw-flex tw-justify-center">
            <q-btn v-if="company"
                   rounded
                   outline
                   :to="'/company/' + project.company.id"
                   class="tw-mt-6 tw-text-primary"
            >
              Voir l'entreprise
            </q-btn>
          </div>
        </div>
      </div>
      <div
        class="tw-flex tw-flex-col tw-w-3/5 -tw-ml-32  tw-items-center"
      >
        <h1 class="tw-text-xl tw-font-medium tw-my-2">{{ project.title }}</h1>
        <p class="tw-text-lg tw-my-3 tw-w-2/3 tw-whitespace-pre-wrap">
          {{ project.description }}
        </p>
        <p v-if="arrowDirection === 'up'" class="tw-text-lg tw-my-3 tw-w-2/3 tw-whitespace-pre-wrap">{{ project.more }}</p>

        <q-btn rounded @click="changeDirection" class="tw-bg-primary tw-text-thirdly tw-my-5">
          <q-icon :name="'keyboard_arrow_' + arrowDirection" />
          Plus d'information
        </q-btn>
      </div>
    </div>
    <div class="tw-w-full">
      <p v-if="project.images.length > 0" class="tw-mx-28 tw-py-5 tw-text-xl">
        Images associés :
      </p>
      <p v-else class="tw-mx-28 tw-py-5 tw-text-xl">Aucune images associés</p>
      <div class="tw-grid tw-grid-cols-2 tw-gap-10 tw-mx-28 tw-pb-10">
        <div
          v-for="image in project.images"
          :key="image"
          class="tw-relative icon tw-h-fit tw-w-3/4 tw-p-1 tw-z-10"
        >
          <q-img :src="image" @click="selectedImg = image" alt="parallax1" class="tw-rounded-2.5xl" />
        </div>
      </div>
    </div>
    <ImageZoomC
      :image="selectedImg"
      :isVisible="!!selectedImg"
      @close="selectedImg = null"
    />
  </q-page>
</template>

<script setup>
//import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";

import projectsData from "src/data/projects";
import ImageZoomC from "components/menuComponent/modal/ImageZoomC.vue";

let route = useRoute();
const project = ref(null);
const company = ref(null);
const selectedImg = ref(null);
const arrowDirection = ref("down")

for (let i = 0; i < projectsData.length; i++) {
  if (projectsData[i].id === "projects") {
    for (let j = 0; j < projectsData[i].data.length; j++) {
      if (projectsData[i].data[j].id === parseInt(route.params.id)) {
        project.value = projectsData[i].data[j];

        if (project.value.company) {
          for (let k = 0; k < projectsData.length; k++) {
            if (projectsData[k].id === "company") {
              for (let l = 0; l < projectsData[k].data.length; l++) {
                if (projectsData[k].data[l].id === project.value.company.id) {
                  company.value = projectsData[k].data[l];
                }
              }
            }
          }
        }
      }
    }
  }
}

function languages() {
  const liste = [];

  if (project.value.languages) {
    for (let i = 0; i < project.value.languages.length; i++) {
      liste.push(project.value.languages[i]);
    }
  }

  if (project.value.frameworks) {
    for (let i = 0; i < project.value.frameworks.length; i++) {
      liste.push(project.value.frameworks[i]);
    }
  }

  return liste;
}

function changeDirection() {
  arrowDirection.value === 'down' ? arrowDirection.value = 'up' : arrowDirection.value = 'down'
}
</script>

<style scoped>
.icon {
  position: relative;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  transition: 0.5s;
}

.icon:hover {
  background-color: rgb(var(--tw-primary));
  cursor: pointer;
}
</style>
