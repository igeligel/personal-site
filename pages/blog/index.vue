<template>
  <div class="container">
    <TheBlogpostHeading />
    <BlogpostArticleList :chunkedBlogPosts="chunkedBlogPosts" />
  </div>
</template>

<script>
import TheBlogpostHeading from '../../components/TheBlogpostHeading';
import BlogpostArticleList from '../../components/BlogpostArticleList';
import blogPosts from '../../content/blogposts';
import Heads from './heads';

export default {
  components: {
    TheBlogpostHeading,
    BlogpostArticleList,
  },
  computed: {
    chunkedBlogPosts() {
      return this.chunkArray(this.blogposts, 3);
    },
  },
  data() {
    return {
      blogposts: blogPosts,
      online: true,
    };
  },
  destroyed() {
    window.removeEventListener('offline', this._toggleNetworkStatus);
    window.removeEventListener('online', this._toggleNetworkStatus);
  },
  head: Heads.Blog,
  methods: {
    _toggleNetworkStatus({ type }) {
      this.online = type === 'online';
    },
    chunkArray(array, length) {
      const chunks = [];
      const arrayLength = array.length;
      let i = 0;
      while (i < arrayLength) {
        chunks.push(array.slice(i, (i += length)));
      }
      return chunks;
    },
    redirect(blogpost) {
      this.$router.push(blogpost.url);
    },
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
