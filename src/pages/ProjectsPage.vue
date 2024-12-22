<template>
  <!--If +4 faire 3d tourne, else faire comme menu-->
  <q-page class="tw-bg-thirdly">
    <div class="tw-w-full tw-flex tw-justify-evenly tw-pt-5">
      <q-input
        outlined
        v-model="inputValues.title"
        bg-color="white"
        label="Chercher un titre"
        @update:modelValue="SearchFilter"
        class="tw-w-1/5 tw-border tw-border-solid tw-border-black tw-rounded-[5px]"
      />
      <q-input
        outlined
        v-model="inputValues.companyName"
        bg-color="white"
        label="Chercher à partir d'une entreprise"
        @update:modelValue="SearchFilter"
        class="tw-w-1/5 tw-border tw-border-solid tw-border-black tw-rounded-[5px]"
      />
      <q-select
        clearable
        outlined
        v-model="inputValues.language"
        bg-color="white"
        label="Langages & Frameworks"
        :options="languagesName"
        @update:modelValue="SearchFilter"
        class="tw-w-1/5 tw-border tw-border-solid tw-border-black tw-rounded-[5px]"
      />
    </div>

    <div
      v-if="projects.length < 1"
      class="tw-flex tw-justify-center tw-w-full tw-mt-10 tw-text-white tw-font-bold tw-text-2xl"
    >
      <p>Aucun résultat trouvé pour cette recherche</p>
    </div>
    <div
      v-else
      class="tw-grid tw-grid-cols-4 tw-gap-8 tw-justify-items-center tw-w-full tw-py-10"
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
  </q-page>
</template>

<script setup>
import {getCurrentInstance, onMounted, ref} from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

import projectsData from "src/data/projects";
import {tiltModule} from "src/modules/tiltModule";

const app = getCurrentInstance().appContext.app;
app.directive('tilt', tiltModule);

const tiltOptions = ref({
  max: 25,
  speed: 400,
  glare: true,
  'max-glare': 0.5
});

const projects = ref([]);

const inputValues = ref({
  title: null,
  companyName: null,
  language: null,
});

const languages = ref([]);
const languagesName = ref([]);

for (let i = 0; i < projectsData.length; i++) {
  if (projectsData[i].id === "languages") {
    languages.value = projectsData[i].data;

    languages.value.forEach((language) => {
      languagesName.value.push(language.name);
    });
  }
}

onMounted(() => {
  SearchAll();
});

function normaliserTexte(texte) {
  if (texte === null || texte === undefined) {
    return "";
  }

  texte = texte.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  texte = texte.toLowerCase();

  return texte;
}

function SearchAll() {
  projects.value = [];

  for (let i = 0; i < projectsData.length; i++) {
    if (projectsData[i].id === "projects") {
      for (let j = 0; j < projectsData[i].data.length; j++) {
        projects.value.push(projectsData[i].data[j]);
      }
    }
  }
}

function SearchFilter() {
  let filter = {};

  Object.keys(inputValues.value).forEach((key) => {
    filter[key] = normaliserTexte(inputValues.value[key]);
  });

  Search(filter);
}

function Search(filter) {
  projects.value = [];

  for (let i = 0; i < projectsData.length; i++) {
    if (projectsData[i].id === "projects") {
      for (let j = 0; j < projectsData[i].data.length; j++) {
        let project = projectsData[i].data[j];

        if (
          Object.keys(filter).every((key) => {
            if (
              filter[key] === null ||
              filter[key] === undefined ||
              filter[key] === ""
            ) {
              return true;
            } else if (key === "language") {
              let languageMatch = project.languages ? project.languages.some((language) => normaliserTexte(language.name).includes(filter[key])) : false;
              let frameworkMatch = project.frameworks ? project.frameworks.some((framework) => normaliserTexte(framework.name).includes(filter[key])) : false;
              return languageMatch || frameworkMatch;
            } else if (key === "companyName") {
              if (project.company) {
                return normaliserTexte(project.company.name).includes(
                  filter[key]
                );
              }
            } else {
              return normaliserTexte(project[key]).includes(filter[key]);
            }
          })
        ) {
          projects.value.push(project);
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
</script>

<style scoped>
@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

.card {
  position: relative;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  transition: 0.5s;
}

.card:hover {
  background-color: rgb(var(--tw-primary));
}

@keyframes spin {
  to {
    --angle: 360deg;
  }
}
</style>
