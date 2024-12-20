<template>
  <HeaderComponent v-if="!isIndexPage" />
  <router-view />
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import HeaderComponent from "components/HeaderComponent.vue";

const route = useRoute();
const isIndexPage = computed(() => route.name === "IndexPage");

defineOptions({
  name: 'App'
});
</script>
