<template>
  <div class="blog-container">
    <div v-html="hello"></div>
  </div>
</template>

<script>
import hello from './markdown/my-visual-studio-code-setup-part-one.md';
import Heads from './heads';

export default {
  head: Heads.MyVisualStudioCodeSetupPartOne,
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
