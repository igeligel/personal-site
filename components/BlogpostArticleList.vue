<template>
  <div class="blogposts__articles pure-g">
    <div
      class="pure-u-lg-1-3 pure-u-md-1-2 pure-u-1-1"
      v-for="blogpost in blogposts"
      :key="blogpost.title"
    >
      <BlogpostArticle
        :blogpost="blogpost"
      />
    </div>
  </div>
</template>

<script>
import BlogpostArticle from './BlogpostArticle';

export default {
  name: 'BlogpostArticleList',
  components: {
    BlogpostArticle,
  },
  props: {
    blogposts: Array,
  },
};
</script>

<style lang="scss" scoped>
.blogposts__articles {
  padding-left: 1.5em;
  padding-right: 1.5em;
}

.blogposts__articles > div {
  cursor: pointer;
}

@media (min-width: 768px) {
  .blogposts__articles > div {
    padding: 0.625em;
  }
}
</style>
