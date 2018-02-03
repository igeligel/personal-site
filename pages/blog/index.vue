<template>
  <div class="container">
    <div class="blogposts__heading">
      <div class="line__wrapper"></div>
      <h2>Blogposts</h2>
    </div>
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
import BlogpostArticle from '../../components/BlogpostArticle';
import blogPosts from '../../content/blogposts';
import Heads from './heads';

export default {
  components: {
    BlogpostArticle,
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
* {
  font-family: 'Lato', sans-serif;
  text-rendering: optimizeLegibility;
}

.container {
  padding-bottom: 75px;
  max-width: 1000px;
  margin: auto;
}

.blogposts__heading {
  padding-top: 24px;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 8px;
  display: inline-block;
}

@media (min-width: 1000px) {
  .blogposts__heading {
    border-bottom: 1px solid transparent;
  }
}

.blogposts__heading h2 {
  font-weight: 400;
  color: #4096c4;
  font-size: 18px;
  margin-left: 45px;
  display: inline-block;
}

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
