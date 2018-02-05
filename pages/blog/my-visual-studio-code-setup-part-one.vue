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
