<template>
  <div class="project-content__container">
    <h2 class="project-content__heading" v-text="heading" />
    <div class="project-content__description" v-html="description" />
  </div>
</template>

<script>
export default {
  name: 'ProjectContent',
  props: {
    heading: String,
    description: String,
  },
};
</script>

<style>
.project-content__container img {
  max-width: 100%;
}
</style>

<style lang="scss" scoped>
.project-content__container {
  padding-top: 0.25em;
  padding-left: 1.5em;
  padding-right: 1.5em;
  padding-bottom: 4.6875em;
}

.project-content__heading {
  font-size: 1.5em;
  margin-bottom: 0.75em;

  @media (min-width: 700px) {
    font-size: 2em;
    margin-bottom: 0.5em;
  }
}

.project-content__description {
  font-size: 1em;
  line-height: 1.75em;
  letter-spacing: -0.004em;

  @media (min-width: 700px) {
    font-size: 1.1875em;
    line-height: 1.74em;
  }
}
</style>
