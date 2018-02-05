<template>
  <div class="blog-container">
    <div v-html="content" />
  </div>
</template>

<script>
import UnitTestingVueJsComponentsWithJest from './markdown/unit-testing-vue-js-components-with-jest.md';
import Heads from './heads';

export default {
  head: Heads.UnitTestingVueJsComponentsWithJest,
  data() {
    return {
      content: UnitTestingVueJsComponentsWithJest,
    };
  },
};
</script>
