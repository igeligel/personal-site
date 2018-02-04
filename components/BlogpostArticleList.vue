<template>
  <div>
    <div
        class="blogposts__articles pure-g"
        v-for="blogpostChunk in chunkedBlogPosts"
        :key="blogpostChunk[0].title + blogpostChunk[0].url"
      >
      <div
        class="pure-u-lg-1-3 pure-u-md-1-2 pure-u-1-1"
        v-for="blogpost in blogpostChunk"
        :key="blogpost.title"
      >
        <BlogpostArticle
          :blogpost="blogpost"
        />
      </div>
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
    chunkedBlogPosts: Array,
  },
};
</script>

<style lang="scss" scoped>
.blogposts__articles {
  padding-left: 24px;
  padding-right: 24px;
}

.blogposts__articles > div {
  cursor: pointer;
}

@media (min-width: 768px) {
  .blogposts__articles > div {
    padding: 10px;
  }
}
</style>
