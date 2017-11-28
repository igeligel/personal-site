<template>
  <div class="blogposts__articles pure-g">
    <div
      v-for="blogpost in slicedBlogposts"
      :key="blogpost.title"
      class="pure-u-lg-1-3 pure-u-md-1-2 pure-u-1-1"
    >
      <BlogpostArticle :blogpost="blogpost" />
    </div>
    <div class="pure-u-1-1 blogpost__more">
      <router-link to="/blog" aria-label="Link to blog">
        Read more
      </router-link>
    </div>
  </div>
</template>

<script>
import BlogpostArticle from '@/components/BlogpostArticle.vue';
import blogposts from '@/content/blogposts';

export default {
  name: 'BlogpostArticles',
  components: {
    BlogpostArticle,
  },
  computed: {
    slicedBlogposts: () => blogposts.slice(0, 3),
  },
};
</script>

<style scoped lang="scss">
$link-color: #4096c4;

@mixin no-link-style-color($color) {
  color: $color;
  text-decoration: none;
}

.blogposts__articles {
  padding: 0 1.5em;
  font-family: 'Lato', sans-serif;
  text-rendering: optimizeLegibility;
}

@media (min-width: 768px) {
  .blogposts__articles > div {
    padding: 0.625em;
  }
}

.blogpost__more {
  margin: 1em 0 0 1em;

  a {
    font-size: 1.125em;
    @include no-link-style-color($link-color);
  }

  a:link {
    @include no-link-style-color($link-color);
  }

  a:visited {
    @include no-link-style-color($link-color);
  }
}
</style>
