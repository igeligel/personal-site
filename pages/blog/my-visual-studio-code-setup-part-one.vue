<template>
  <div class="blog-container">
    <div v-html="content" />
  </div>
</template>

<script>
import MyVisualStudioCodeSetupPartOne from './markdown/my-visual-studio-code-setup-part-one.md';
import Heads from './heads';

export default {
  head: Heads.MyVisualStudioCodeSetupPartOne,
  data() {
    return {
      content: MyVisualStudioCodeSetupPartOne,
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
