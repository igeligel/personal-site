<template>
  <svg viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
</template>

<script>
export default {
  name: 'EmailSvg',
};
</script>

<style lang="scss" scoped>
svg {
  max-height: 25px;
  max-width: 25px;
  margin: 16px;
  width: 24px;
  height: 24px;
  fill: none;
  stroke: #b0b5b3;
  stroke-width: 2px;
}
</style>
