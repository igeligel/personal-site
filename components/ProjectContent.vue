<template>
  <div class="project-content">
    <h2 class="project-content__heading" v-text="heading"></h2>
    <div v-html="description"></div>
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
.project-content img {
  max-width: 100%;
}
</style>

<style lang="scss" scoped>
.project-content {
  padding-top: 24px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 75px;
}

.project-content__heading {
  font-size: 24px;
  margin-bottom: 18px;
}

@media (min-width: 700px) {
  .project-content__heading {
    font-size: 32px;
  }
}

.project-content > div {
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -.004em;
}

@media (min-width: 700px) {
  .project-content > div {
    font-size: 19px;
    line-height: 33px;
  }
}
</style>
