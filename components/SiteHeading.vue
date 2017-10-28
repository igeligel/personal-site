<template>
  <div class="site-heading__container">
    <h2 class="site-heading__heading" v-text="label" />
  </div>
</template>

<script>
export default {
  name: 'SiteHeading',
  props: {
    label: String,
  },
};
</script>

<style lang="scss" scoped>
$underline-color: #dbdbdb;
$heading-color: #4096c4;

.site-heading__container {
  padding-top: 1.5em;
  border-bottom: 0.0625em solid $underline-color;
  padding-bottom: 0.5em;
  display: inline-block;

  @media (min-width: 1000px) {
    border-bottom: 0.0625em solid transparent;
  }
}

.site-heading__heading {
  font-weight: 400;
  color: $heading-color;
  font-size: 1.125em;
  margin-left: 2.5em;
}
</style>
