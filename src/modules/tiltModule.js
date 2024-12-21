import VanillaTilt from 'vanilla-tilt';

export const tiltModule = {
  mounted(el, binding) {
    VanillaTilt.init(el, binding.value || {});
  },
  unmounted(el) {
    el.vanillaTilt.destroy();
  }
};
