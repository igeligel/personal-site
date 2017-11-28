<template>
  <div class="blogpost__article" :style="borderStyle">
    <router-link
      v-if="!blogpost.type"
      class="blogpost__article-link"
      :aria-label="ariaLabel"
      :to="blogpost.url"
    >
      <BlogpostArticleContent :blogpost="blogpost" />
    </router-link>
    <a
      v-if="blogpost.type"
      class="blogpost__article-link"
      :aria-label="ariaLabel"
      :href="blogpost.url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BlogpostArticleContent :blogpost="blogpost" />
    </a>
  </div>
</template>

<script>
import BlogpostArticleContent from './BlogpostArticleContent';

export default {
  name: 'BlogpostArticle',
  components: {
    BlogpostArticleContent,
  },
  props: {
    blogpost: Object,
  },
  computed: {
    ariaLabel() {
      return `Link to blogpost ${this.blogpost.title}`;
    },
    borderStyle() {
      const mediumColor = '#03a87c';
      if (this.blogpost.type === 'medium') {
        return `border-color: ${mediumColor}`
      }
      return '';
    },
  },
};
</script>

<style lang="scss" scoped>
$border-color: #dbdbdb;

.blogpost__article {
  cursor: pointer;
  margin-top: 1em;
  border-radius: 0.25em;
  border: 1px solid $border-color;
}

.blogpost__article-link {
  color: black;
  text-decoration: none;
}
</style>
