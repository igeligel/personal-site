<template>
  <div class="blogposts__articles pure-g">
    <div
      class="pure-u-lg-1-3 pure-u-md-1-2 pure-u-1-1"
      :key="blogpost.title"
      v-for="blogpost in minimizedBlogposts"
    >
      <blogpost-article :blogpost="blogpost"></blogpost-article>
    </div>
    <div class="pure-u-1-1 blogpost__more">
      <router-link to="/blog">Read more</router-link>
    </div>
  </div>
</template>

<script>
import BlogpostArticle from '../components/BlogpostArticle.vue';
import blogposts from '../content/blogposts';

export default {
  components: {
    BlogpostArticle,
  },
  computed: {
    minimizedBlogposts: () => blogposts.slice(0, 3),
  },
  data() {
    return {
      blogposts,
    };
  },
  name: 'BlogpostArticles',
};
</script>

<style scoped lang="scss">
@mixin no-link-style-color($color) {
  color: $color;
  text-decoration: none;
}

* {
  font-family: 'Lato', sans-serif;
  text-rendering: optimizeLegibility;
}

.blogposts__articles {
  padding: 0 24px
}

@media (min-width: 768px) {
  .blogposts__articles > div {
    padding: 10px;
  }
}

.blogpost__more {
  margin: 16px 0 0 16px;

  a {
    font-size: 18px;
    @include no-link-style-color(#4096c4);
  }

  a:link {
    @include no-link-style-color(#4096c4);
  }

  a:visited {
    @include no-link-style-color(#4096c4);
  }
}
</style>
