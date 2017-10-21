<template>
  <svg viewBox="0 0 300 300">
    <g>
      <polygon
        class="letter__outside"
        points="182.9,26.5 150,83.6 117.1,26.5 7.4,26.5 150,273.5 292.6,26.5"
      />
      <polygon
        class="letter__inside"
        points="182.9,26.5 150,83.6 117.1,26.5 64.5,26.5 150,174.7 235.5,26.5"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'VueInlineSvg',
};
</script>

<style lang="scss" scoped>
svg {
  height: 16px;
  transform: translate(0%, 12.5%);

  .letter__inside {
    fill: #474747;
  }

  .letter__outside {
    fill: #a4a4a4;
  }
}
</style>
