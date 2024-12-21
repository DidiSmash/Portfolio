<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="close">
    <div class="tw-bg-secondary tw-text-white tw-p-5 tw-rounded-2.5xl tw-w-1/2 tw-h-1/2 tw-text-center">
      <h2 class="tw-text-2xl tw-font-bold">{{ newsItem.name }}</h2>

      <div class="tw-flex tw-w-full tw-h-3/4">
        <div class="tw-h-full tw-w-3/4">
          <p class="tw-text-xl tw-p-12">{{ newsItem.description }}</p>
          <p class="tw-text-lg">Date de sortie : {{ newsItem.date }}</p>
        </div>
        <div class="tw-h-full tw-p-10 tw-w-1/4">
          <div class="tw-relative card tw-w-full tw-h-fit tw-p-1 -tw-mt-6 tw-z-10">
            <q-img fit="contain" :src="newsItem.icon" alt="parallax1" class="tw-h-full tw-w-full tw-rounded-full" />
          </div>
        </div>
      </div>

      <q-btn label="Visiter le lien" @click="openLink" class="tw-mt-5 tw-bg-primary tw-text-thirdly" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  newsItem: Object,
  isVisible: Boolean,
});

const emit = defineEmits(['close']);

function close() {
  emit('close');
}

function openLink() {
  setTimeout(() => {
    window.open(props.newsItem.link, '_blank');
  }, 500);
}
</script>

<style scoped>
.modal-overlay {
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

@property --angle{
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

.card::after, .card::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: conic-gradient(from var(--angle), #ffffff, #3cc3cc, #ffffff, #da61e4, #ffffff);
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: -1;
  border-radius: 100%;
  animation: spin 10s linear infinite;
}
.card::before {
  filter: blur(20px);
  opacity: 0.5;
}

@keyframes spin {
  to {
    --angle: 360deg;
  }
}
</style>
