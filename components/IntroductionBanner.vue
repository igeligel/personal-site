<template>
  <div class="headline__container">
    <h2 class="headline__heading" v-text="welcomeLine" />
    <h3 class="headline__sub-heading" v-text="jobRepresentation" />
    <h3 class="headline__sub-heading" v-text="motto" />
  </div>
</template>

<script>
export default {
  name: 'HeadlineContainer',
  props: {
    author: String,
    jobTitle: String,
    motto: String,
  },
  computed: {
    welcomeLine() {
      return `Hey, I am ${this.author}`;
    },
    jobRepresentation() {
      return `I am a ${this.jobTitle}`;
    },
  },
};
</script>

<style lang="scss" scoped>
$gradient-higher: #a1c4fd;
$gradient-lower: #c2e9fb;
$font-color: #1e2c44;

.headline__container {
  padding-left: 2.8125em;
  padding-right: 2.8125em;
  padding-top: 1.5em;
  padding-bottom: 2em;
  background: $gradient-higher;
  background: linear-gradient(
    to right,
    $gradient-higher 0%,
    $gradient-lower 100%
  );
  width: 100vw;

  @media (min-width: 1000px) {
    margin-left: calc(50vw - (100vw - 1000px / 2));
    padding-left: calc((100vw - 1000px) / 2 + 1.25em);
  }
}

.headline__heading {
  color: $font-color;
  font-weight: 300;
}

.headline__sub-heading {
  color: $font-color;
  font-weight: 300;
  font-size: 0.875em;
}
</style>
