<template>
  <div class="blog-container">
    <div v-html="content" />
  </div>
</template>

<script>
import WritingAProgressiveImageLoadingComponent from './markdown/writing-a-progressive-image-loading-component.md';
import Heads from './heads';

export default {
  head: Heads.WritingAProgressiveImageLoadingComponent,
  data() {
    return {
      content: WritingAProgressiveImageLoadingComponent,
    };
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
