<template>
  <span class="project-links__container">
    <span
      v-for="(projectLink, index) in projectLinksRepresentation"
      :key="index"
    >
      <a
        :aria-label="projectLink.ariaLabel"
        :href="projectLink.url"
        v-text="projectLink.label"
        class="project-links__link"
        target="_blank"
        rel="noopener noreferrer"
      />
      <span v-if="index !== projectLinks.length - 1" v-text="' | '" />
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
  computed: {
    projectLinksRepresentation() {
      return this.projectLinks.map(projectLink => {
        var copy = Object.assign({}, projectLink);
        copy.ariaLabel = `Link to open project on ${projectLink.label}`;
        return copy;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$main-color: #4096c4;

.project-links__container {
  color: rgba($main-color, 0.3);
  font-size: 1.125em;
  margin-left: 2.5em;
}

.project-links__link {
  color: $main-color;
  text-decoration: none;
}
</style>
