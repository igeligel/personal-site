<template>
  <div class="blogposts__articles pure-g">
    <div class="pure-u-lg-1-3 pure-u-md-1-2 pure-u-1-1" v-bind:key="blogpost.title" v-for="blogpost in minimizedBlogposts">
      <blogpost-article
        :blogpost="blogpost">
      </blogpost-article>
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
  name: 'blogpost-articles',
  components: {
    BlogpostArticle,
  },
  computed: {
    minimizedBlogposts: function getMinimizedBlogposts() {
      return blogposts.slice(0, 3);
    },
  },
  data() {
    return {
      blogposts,
    };
  },
};
</script>

<style scoped>
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
}

.blogpost__more a {
  font-size: 18px;
  color: #4096c4;
  text-decoration: none;
}

.blogpost__more a:link {
  color: #4096c4;
  text-decoration: none;
}

.blogpost__more a:visited {
  color: #4096c4;
  text-decoration: none;
}
</style>
