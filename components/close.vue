<template>
  <svg viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
</template>

<script>
export default {
  name: 'CloseSvg',
};
</script>

<style lang="scss" scoped>
$grey: #706F6F;

svg {
  width: 1.5em;
  height: 1.5em;
  fill: $grey;
  stroke: $grey;
  stroke-width: 0.125em;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
