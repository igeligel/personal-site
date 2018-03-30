<template>
  <div>
    <div class="blogpost-article__image-container">
      <img
        class="blogpost__article-image"
        :src="blogpost.previewImage"
        :alt="blogpost.altTag"
        :style="borderStyle"
      />
      <MediumNew
        v-if="blogpost.type === 'medium'"
        class="blogpost__article-source--medium"
        style="stroke: white; stroke-width: 35; stroke-linecap: round;"
      />
    </div>
    <div class="blogpost__article-content">
      <h2 class="blogpost__article-title" v-text="blogpost.title" />
      <p
        class="blogpost__article-description"
        v-text="blogpost.description"
      />
    </div>
  </div>
</template>

<script>
import MediumNew from './general-icons/MediumNew';

export default {
  name: 'BlogpostArticleContent',
  components: {
    MediumNew,
  },
  props: {
    blogpost: Object,
  },
  computed: {
    borderStyle() {
      const mediumColor = 'rgba(3, 168, 124, 0.5)';
      if (this.blogpost.type === 'medium') {
        return `border-color: ${mediumColor}`;
      }
      return '';
    },
  },
};
</script>

<style lang="scss" scoped>
$image-border-color: #4096c4;

.blogpost-article__image-container {
  position: relative;
}

.blogpost__article-image {
  border-top-left-radius: 0.25em;
  border-top-right-radius: 0.25em;
  border-bottom: 1px solid $image-border-color;
  width: 100%;
  position: relative;
  left: 0;
}

.blogpost__article-source {
  position: absolute;
  top: 0.39em;
  left: 0.39em;
}

.blogpost__article-source--medium {
  @extend .blogpost__article-source;
  height: 25px;
  width: 31px;
}

.blogpost__article-content {
  padding: 1em 0.75em;
}

.blogpost__article-title {
  font-size: 1.125em;
  font-weight: 400;
  padding-bottom: 0.45em;
}

.blogpost__article-description {
  font-size: 0.875em;
  font-weight: 400;
}
</style>
