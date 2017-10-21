<template>
  <span class="links">
    <span v-for="(item, index) in projectLinks" :key="index">
      <a :aria-label="`Link to open project on ${item.label}`" :href="item.url" target="_blank" rel="noopener noreferrer">{{item.label}}</a>
      <span v-if="index !== projectLinks.length - 1"> | </span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'ProjectLinks',
  props: {
    projectLinks: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.links {
  font-weight: 400;
  color: rgba(64,150,196, 0.3);
  font-size: 18px;
  margin-left: 45px;
  display: inline-block;
  margin-top: 0;
  margin-bottom: 0;
}

a {
  font-weight: 400;
  color: #4096c4;
  font-size: 18px;
  display: inline-block;
  margin-top: 0;
  margin-bottom: 0;
  text-decoration: none;
}
</style>
