<template>
  <q-layout view="hHr lpR fFr">
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar';

const $q = useQuasar();
const isMobile = ref($q.platform.is.mobile);

if (isMobile.value) {
  console.log('Mobile')
} else {
  console.log('Desktop')
}
</script>
