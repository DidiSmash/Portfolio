<template>
  <!--If +3 faire 3d tourne, else faire comme menu-->
  <q-page class="tw-bg-thirdly tw-text-white">
    <div class="tw-flex tw-py-16">
      <div class="tw-flex tw-flex-col tw-w-2/5 tw-ml-32 tw-items-center">
        <div class="tw-relative tw-w-1/2 tw-h-80 tw-p-1 tw-z-10">
          <q-img
            fit="contain"
            :src="company.logo"
            alt="parallax1"
            :style="{ background: company.logoBg }"
            class="tw-h-full tw-w-full tw-rounded-2.5xl"
          />
        </div>
        <div class="tw-w-1/2">
          <div class="tw-flex tw-flex-wrap tw-items-baseline">
            <!--<p class="tw-text-lg tw-mt-2">Date de création :</p>
            <div class="tw-mx-2">
              {{ company.createdAt }}
            </div>-->

            <p class="tw-text-lg tw-mt-2">Situation géographique :</p>
            <div @click="openMap = company.locationUrl" class="tw-mr-5 hover:tw-text-primary hover:tw-cursor-pointer">
              {{ company.location }}
            </div>
          </div>

          <div class="tw-flex tw-items-center">
            <p class="tw-text-lg tw-mt-2">Outils :</p>
            <div
              v-for="tool in company.tools"
              :key="tool.id"
              class="tw-h-1/2 tw-p-1 tw-mx-2 tw-my-1 tw-flex"
            >
              <q-img
                fit="contain"
                :src="tool"
                alt="parallax1"
                class="tw-mt-3 tw-p-5"
              />
            </div>
          </div>

          <div class="tw-items-baseline">
            <p class="tw-text-lg tw-mt-2">Equipe :</p>
            <span v-if="company"
                  class="tw-text-sm tw-p-1 tw-whitespace-pre-wrap"
            >
                {{ company.team }}
              </span>
          </div>
        </div>
      </div>
      <div
        class="tw-flex tw-flex-col tw-w-3/5 -tw-ml-32 tw-items-center"
      >
        <h1 class="tw-text-xl tw-font-medium tw-my-2">{{ company.name }}</h1>
        <p class="tw-text-lg tw-my-3 tw-px-4 tw-w-2/3" v-html="company.description"/>
      </div>
    </div>
    <p class="tw-mx-28 tw-py-5 tw-text-xl">
      projets associés :
    </p>
    <div class="tw-w-full">
      <div
        v-if="projects.length < 1"
        class="tw-flex tw-justify-center tw-w-full tw-mt-10 tw-text-white tw-font-bold tw-text-2xl"
      >
        <p>Aucun projets associés</p>
      </div>
      <div
        v-else
        class="tw-grid tw-grid-cols-4 tw-gap-8 tw-w-full tw-justify-items-center tw-py-10"
      >
        <div
          v-for="project in projects"
          :key="project"
          v-tilt="tiltOptions"
          class="tw-relative card tw-w-2/3 tw-min-h-[27rem] tw-p-1 tw-z-10 hover:tw-cursor-pointer"
        >
          <div v-ripple @click="handleMouseDownCard(project.id)" class="tw-h-full tw-rounded-2.5xl tw-border-gray-400 tw-border-opacity-20 tw-border-t tw-border-l">
            <div class="tw-flex tw-flex-col tw-bg-secondary tw-h-full tw-rounded-2.5xl tw-text-white">
              <div class="tw-overflow-hidden tw-pt-2 tw-px-2 tw-h-2/5">
                <q-img ratio="2" fit="contain" :src="project.logo" alt="parallax1" :style="{ background: project.logoBg }" class="tw-rounded-2.5xl tw-border tw-border-black" />
              </div>
              <div class="tw-flex tw-flex-col tw-px-3 tw-h-4/6 tw-justify-between">
                <div>
                  <p class="tw-text-center tw-py-3 tw-font-bold tw-text-base">{{project.title}}</p>
                  <p class="tw-px-2 tw-line-clamp-3 tw-text-gray-300 tw-text-opacity-50">{{ project.description }}</p>
                </div>

                <div class="tw-h-2/6">
                  <div v-if="project.languages"
                       class="tw-flex tw-flex-wrap tw-justify-evenly"
                  >
                    <div
                      v-for="language in project.languages"
                      :key="language.id"
                      class="tw-h-1/2 tw-mx-1">
                      <p
                        :style="{
                      color: language.color
                    }"
                        class="tw-p-1"
                      >
                        #{{language.name}}
                      </p>
                    </div>
                  </div>

                  <div v-if="project.frameworks"
                       class="tw-flex tw-flex-wrap tw-justify-evenly"
                  >
                    <div
                      v-for="framework in project.frameworks"
                      :key="framework.id"
                      class="tw-h-1/2 tw-mx-1"
                    >
                      <p
                        :style="{
                      color: framework.color
                    }"
                        class="tw-p-1"
                      >
                        #{{framework.name}}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tw-flex tw-justify-center">
        <div @click="handleMouseDown" class="tw-w-1/6 tw-h-12 tw-mb-10">
          <q-btn rounded class="tw-bg-primary tw-text-thirdly tw-w-full tw-h-full">Plus</q-btn>
        </div>
      </div>
    </div>
    <GoogleMapC
      :locationUrl="company.locationUrl"
      :isVisible="!!openMap"
      @close="openMap = null"
    />
  </q-page>
</template>

<script setup>
import {getCurrentInstance, ref} from "vue";
import { useRoute, useRouter } from "vue-router";

import projectsData from "src/data/projects";
import {tiltModule} from "src/modules/tiltModule";
import GoogleMapC from "components/menuComponent/modal/GoogleMapC.vue";

const app = getCurrentInstance().appContext.app;
app.directive('tilt', tiltModule);

const tiltOptions = ref({
  max: 25,
  speed: 400,
  glare: true,
  'max-glare': 0.5
});

let route = useRoute();
const router = useRouter();
const company = ref(null);
const projects = ref([]);
const openMap = ref(null);

for (let i = 0; i < projectsData.length; i++) {
  if (projectsData[i].id === "company") {
    for (let j = 0; j < projectsData[i].data.length; j++) {
      if (projectsData[i].data[j].id === parseInt(route.params.id)) {
        company.value = projectsData[i].data[j];

        for (let k = 0; k < projectsData.length; k++) {
          if (projectsData[k].id === "projects") {
            for (let l = 0; l < projectsData[k].data.length; l++) {
              if (
                projectsData[k].data[l].company &&
                company.value.id === projectsData[k].data[l].company.id &&
                projects.value.length <= 3
              ) {
                projects.value.push(projectsData[k].data[l]);
              }
            }
          }
        }
      }
    }
  }
}

function handleMouseDownCard(id) {
  setTimeout(() => {
    router.push("/projects/" + id);
  }, 500);
}

function handleMouseDown() {
  setTimeout(() => {
    router.push("/projects");
  }, 500);
}
</script>

<style scoped>
.card {
  position: relative;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  transition: 0.5s;
}

.card:hover {
  background-color: rgb(var(--tw-primary));
}
</style>
