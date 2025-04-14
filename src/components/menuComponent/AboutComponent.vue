<template>
  <p class="tw-text-2.5xl tw-my-5 tw-text-center tw-text-white">Mon parcours</p>
  <div class="tw-flex tw-justify-center">
    <div class="tw-h-3/4 tw-w-1/2">
      <q-timeline
        :layout="'loose'"
        color="secondary"
        class="tw-text-white tw-h-full tw-overflow-auto"
      >
        <q-timeline-entry
          v-for="(item, index) in roadMapContent"
          :key="index"
          :title="item.name"
          :avatar="item.logo"
          :subtitle="item.date"
          :color="item.color"
          :side="index % 2  === 1 ? 'left' : 'right'"
        >
          <div :style="{'border-color': item.color}" class="tw-border tw-border-primary tw-rounded tw-p-2">
            {{ item.description }}
          </div>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </div>
</template>

<script setup>
import roadMapContent from 'src/data/roadMap'
</script>

<style>

</style>
