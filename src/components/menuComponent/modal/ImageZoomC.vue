<template>
  <div v-if="isVisible" :class="{ 'modal-overlay-project': modeProject, 'modal-overlay-news': !modeProject}" @click.self="close">
    <div class="tw-bg-secondary tw-p-5 tw-rounded-2.5xl tw-w-3/5">
      <q-img :src="image" :fit="'contain'" alt="parallax1" class="tw-rounded-2.5xl tw-max-h-[50rem]" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  image: String,
  isVisible: Boolean,
  modeProject: Boolean,
})

const emit = defineEmits(['close']);

function close() {
  emit('close');
}
</script>

<style scoped>
.modal-overlay-project {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-overlay-news {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
</style>
