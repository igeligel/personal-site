<template>
  <div class="blog-container">
    <div v-html="hello"></div>
  </div>
</template>

<script>
import hello from './markdown/writing-a-progressive-image-loading-component.md';
import Heads from './heads';

export default {
  head: Heads.WritingAProgressiveImageLoadingComponent,
  computed: {
    hello() {
      return hello;
    },
  },
};
</script>

<style scoped>
.blog-container {
  max-width: 710px;
  margin: auto;
  padding-bottom: 75px;
}
</style>
