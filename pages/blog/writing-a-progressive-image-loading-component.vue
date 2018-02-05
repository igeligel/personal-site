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
