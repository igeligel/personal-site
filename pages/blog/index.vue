<template>
  <div class="container">
    <TheBlogpostHeading />
    <BlogpostArticleList :blogposts="blogposts" />
  </div>
</template>

<script>
import TheBlogpostHeading from '../../components/TheBlogpostHeading';
import BlogpostArticleList from '../../components/BlogpostArticleList';
import blogPosts from '../../content/blogposts';
import Heads from './heads';

export default {
  head: Heads.Blog,
  components: {
    TheBlogpostHeading,
    BlogpostArticleList,
  },
  data() {
    return {
      blogposts: blogPosts,
      online: true,
    };
  },
  mounted() {
    if (!window.navigator) {
      this.online = false;
      return;
    }
    this.online = Boolean(window.navigator.onLine);
    window.addEventListener('offline', this._toggleNetworkStatus);
    window.addEventListener('online', this._toggleNetworkStatus);
  },
  destroyed() {
    window.removeEventListener('offline', this._toggleNetworkStatus);
    window.removeEventListener('online', this._toggleNetworkStatus);
  },
  methods: {
    _toggleNetworkStatus({ type }) {
      this.online = type === 'online';
    },
    redirect(blogpost) {
      this.$router.push(blogpost.url);
    },
  },
};
</script>

<style scoped>
.container {
  padding-bottom: 75px;
  max-width: 1000px;
  margin: auto;
  font-family: 'Lato', sans-serif;
  text-rendering: optimizeLegibility;
}
</style>
