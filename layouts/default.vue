<template>
  <div>
    <desktop-menu></desktop-menu>
    <nuxt/>
    <mobile-menu></mobile-menu>
  </div>
</template>

<style>
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Lato', sans-serif;
}
</style>

<script>
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

export default {
  components: {
    DesktopMenu,
    MobileMenu,
  },
};
</script>
