<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="close">
    <div class="tw-bg-secondary tw-p-5 tw-rounded-2.5xl tw-w-3/5">
      <iframe :src="locationUrl" width="1100" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="tw-rounded-2.5xl"></iframe>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  locationUrl: String,
  isVisible: Boolean,
})

const emit = defineEmits(['close']);

function close() {
  emit('close');
}
</script>

<style scoped>
.modal-overlay {
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
</style>
