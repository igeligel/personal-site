<template>
  <div v-html="hello"></div>
</template>

<script>
import hello from './markdown/jquery-selector-performance.md'

export default {
  computed: {
    hello() {
      return hello;
    },
  },
}
</script>
