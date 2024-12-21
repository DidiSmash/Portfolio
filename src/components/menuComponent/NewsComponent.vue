<template>
  <!-- rework pas de points mais un truc plus responcive et qui joue avec le rond actualité ou une autre forme ex étoile -->
  <div class="tw-bg-thirdly tw-flex tw-h-dvh">
    <div ref="container" class="tw-relative tw-w-2/5 tw-h-full"></div>
    <div class="tw-flex tw-items-center tw-justify-center tw-w-1/5 tw-h-full">
      <div class="tw-flex tw-justify-center tw-items-center tw-bg-black tw-text-white tw-text-2.5xl tw-border-4 tw-border-solid tw-border-white tw-rounded-full tw-w-1/2 circle responsive-text">Actualité</div>
    </div>
    <div ref="container2" class="tw-relative tw-w-2/5 tw-h-full"></div>

    <NewsDetail
      :newsItem="selectedNewsItem"
      :isVisible="!!selectedNewsItem"
      @close="selectedNewsItem = null"
    />
  </div>
</template>

<script setup>
import {onMounted, ref, h, createApp} from 'vue';
import {QBtn, Quasar} from 'quasar';
import news from 'src/data/news.js';
import NewsDetail from 'components/menuComponent/modal/DetailNewsC.vue';

const container = ref(null);
const container2 = ref(null);
const containerUnits = ref(0);
const selectedNewsItem = ref(null);

onMounted(() => {
  addCircles(news.length);
  /*window.addEventListener('resize', () => {
    const allCircles = [
      ...container.value.querySelectorAll('div'),
      ...container2.value.querySelectorAll('div'),
    ];

    for (const circle of allCircles) {
      const containerWidth = container.value.clientWidth;
      const containerHeight = container.value.clientHeight;

      const posX = parseFloat(circle.style.left);
      const posY = parseFloat(circle.style.top);

      circle.style.left = `${(posX / 100) * containerWidth}px`;
      circle.style.top = `${(posY / 100) * containerHeight}px`;
    }
  });*/
});

function checkCollision(circle1, circle2) {
  const dx = circle1.x - circle2.x;
  const dy = circle1.y - circle2.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < (circle1.size / 2 + circle2.size / 2);
}

function addCircle(buttonConfig) {
  let collision;
  let circle;

  do {
    collision = false;
    circle = document.createElement('div');

    const containerWidth = container.value.clientWidth;
    const containerHeight = container.value.clientHeight;
    const maxSize = 75;
    const minSize = 50;
    const maxPos = 85;
    const minPos = 20;

    const size = Math.random() * (maxSize - minSize) + minSize;
    const posX = Math.random() * (maxPos - minPos) + minPos;
    const posY = Math.random() * (maxPos - minPos) + minPos;

    circle.style.position = 'absolute';
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${posX}%`;
    circle.style.top = `${posY}%`;
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    circle.style.display = 'flex';
    circle.style.justifyContent = 'center';
    circle.style.alignItems = 'center';

    const zIndexRef = ref(1);

    // Monte composant Vue
    const buttonContainer = document.createElement('div');
    buttonContainer.style.position = 'relative';
    buttonContainer.style.padding = '0.1rem';

    const app = createApp({
      render() {
        const img = h('img', {
          src: news[buttonConfig.id].icon,
          style: {
            position: 'relative',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
            zIndex: 1,
          },
          onMouseover: () => {
            if (buttonContainer) {
              buttonContainer.style.zIndex = 50;
              buttonContainer.classList.add('circleBg');
            }
          },
          onMouseleave: () => {
            if (buttonContainer) {
              buttonContainer.style.zIndex = zIndexRef.value;
              buttonContainer.classList.remove('circleBg');
            }
          },
        });
        return h(QBtn, {
          round: true,
          flat: true,
          onClick: buttonConfig.onClick,
        }, () => [img]);
      }
    });

    app.use(Quasar);
    app.mount(buttonContainer);

    circle.appendChild(buttonContainer);

    const newCircle = {
      x: (posX / 100) * containerWidth,
      y: (posY / 100) * containerHeight,
      size: size,
    };

    const allCircles = [
      ...container.value.querySelectorAll('div'),
      ...container2.value.querySelectorAll('div'),
    ];

    for (const existingCircle of allCircles) {
      const existingCircleData = {
        x: (parseFloat(existingCircle.style.left) / 100) * containerWidth,
        y: (parseFloat(existingCircle.style.top) / 100) * containerHeight,
        size: parseFloat(existingCircle.style.width),
      };

      if (checkCollision(newCircle, existingCircleData)) {
        collision = true;
        break;
      }
    }
  } while (collision);

  if (containerUnits.value >= buttonConfig.total / 2) {
    container2.value.appendChild(circle);
  } else {
    container.value.appendChild(circle);
  }
  containerUnits.value++;

  return circle;
}

function addCircles(number) {
  for (let i = 0; i < number; i++) {
    addCircle({
      id: i,
      label: i + 1,
      total: number,
      onClick: () => {
        (selectedNewsItem.value = news[i])
      }
    });
  }
}
</script>

<style>
.responsive-text {
  font-size: 2vw;
}

.circle {
  position: relative;
  width: 50%;
  padding-top: 25%;
  padding-bottom: 25%;
  border-radius: 50%;
  height: 0;
}

@property --angle{
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

.circleBg::after, .circleBg::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: conic-gradient(from var(--angle), #ffffff, #3cc3cc, #ffffff, #da61e4, #ffffff);
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: -1;
  border-radius: 50px;
  animation: spin 10s linear infinite;
}
.circleBg::before {
  filter: blur(20px);
  opacity: 0.5;
}

@keyframes spin {
  to {
    --angle: 360deg;
  }
}
</style>
