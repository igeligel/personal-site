<template>
  <div class="blog-container">
    <div v-html="content" />
  </div>
</template>

<script>
import JquerySelectorPerformanceContent from './markdown/jquery-selector-performance.md';
import Heads from './heads';

export default {
  head: Heads.JquerySelectorPerformance,
  data() {
    return {
      content: JquerySelectorPerformanceContent,
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
