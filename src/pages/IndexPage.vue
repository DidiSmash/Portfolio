<template>
  <q-page class="sliderWrapper">
    <swiper
      @swiper="onSwiper"
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :mousewheel="mousewheel"
      :pagination="pagination"
      touch-events-target="container"
      class="tw-h-dvh tw-w-full tw-bg-thirdly"
      direction="vertical"
    >
      <swiper-slide>
        <HomeComponent @nextSlide="nextSlide" />
      </swiper-slide>
      <swiper-slide>
        <AboutComponent />
      </swiper-slide>
      <swiper-slide>
        <CreationsComponent />
      </swiper-slide>
      <swiper-slide>
        <NewsComponent />
      </swiper-slide>
      <swiper-slide>
        <ContactComponent />
      </swiper-slide>
    </swiper>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Mousewheel, EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";

import HomeComponent from "components/menuComponent/HomeComponent.vue";
import AboutComponent from "components/menuComponent/AboutComponent.vue";
import CreationsComponent from "components/menuComponent/CreationsComponent.vue";
import NewsComponent from "components/menuComponent/NewsComponent.vue";
import ContactComponent from 'components/menuComponent/ContactComponent.vue'

const swiperInstance = ref();
const icons = ref(["home", "info", "construction", "newspaper", "email"]);
const modules = [Pagination, Mousewheel, EffectCreative];
const mousewheel = ref({ releaseOnEdges: true });
const pagination = ref({
  clickable: true,
  renderBullet: function (index, className) {
    return (
      '<span class="' +
      className +
      ' tw-text-2xl custom-pagination"><i class="q-icon notranslate material-icons" aria-hidden="true" role="presentation" style="font-size: 2vw;">' +
      icons.value[index] +
      "</i></span>"
    );
  },
  modifierClass: "custom-pagination-",
});

function onSwiper(swiper) {
  swiperInstance.value = swiper;
}

function nextSlide() {
  swiperInstance.value.slideNext();
}
</script>

<style scoped>
.sliderWrapper {
  :global(.custom-pagination-bullets) {
    bottom: 2.5%;
    margin-left: 35%;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgb(var(--tw-secondary) / 0.9);
    border-radius: 50px;
  }

  :global(.custom-pagination) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12%;
    height: 0;
    margin-top: 2%;
    margin-bottom: 2%;
    padding-top: 6%;
    padding-bottom: 6%;
    color: #6d28d9;
    transition: transform 0.3s, background-color 0.3s;
  }

  :global(.swiper-pagination-bullet-active) {
    background-color: rgb(var(--tw-thirdly));
    color: rgb(var(--tw-primary));
  }

  :global(.custom-pagination:hover) {
    transform: scale(1.1);
    background-color: rgba(109, 40, 217, 0.1);
  }
}

h1, h2, h3 {
  font-family: 'Arial', sans-serif;
  margin: 10px 0;
}

h1 {
  font-size: 2.5em;
}

h2 {
  font-size: 2em;
}

h3 {
  font-size: 1.5em;
}
</style>
