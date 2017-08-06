<template>
  <div class="container">
    <div class="blogposts__heading">
      <div class="line__wrapper"></div>
      <h2>Blogposts</h2>
    </div>
    <div class="blogposts__articles pure-g" style="padding-left: 24px; padding-right: 24px;" v-bind:key="blogpostChunk[0].title + blogpostChunk[0].url" v-for="blogpostChunk in chunkedBlogPosts">
      <div class="pure-u-lg-1-3 pure-u-md-1-2 pure-u-1-1" v-for="blogpost in blogpostChunk" v-bind:key="blogpost.title">
        <blogpost-article
          :blogpost="blogpost">
        </blogpost-article>
      </div>
    </div>
  </div>
</template>

<script>
import blogPosts from '../../content/blogposts';
import BlogpostArticle from '../../components/BlogpostArticle';

export default {
  components: {
    'blogpost-article': BlogpostArticle,
  },
  computed: {
    chunkedBlogPosts() {
      return this.chunkArray(this.blogposts, 3);
    }
  },
  data () {
    return {
      blogposts: blogPosts,
      online: true
    }
  },
  destroyed () {
    window.removeEventListener('offline', this._toggleNetworkStatus)
    window.removeEventListener('online', this._toggleNetworkStatus)
  },
  head: {
    title: 'Blog | Web Dev Stories by Kevin Peters',
    meta: [
      { hid: 'description', name: 'description', content: 'Blog articles by Kevin Peters. Interesting articles about Vue.js, .NET and the whole world of JavaScript.' },
      { hid: 'subject', name: 'subject', content: 'Blog articles of Kevin Peters.' },
      { hid: 'abstract', name: 'abstract', content: 'Blog articles of Kevin Peters.' },
      { hid: 'url', name: 'url', content: 'https://kevinpeters.net/blog/' },
      { hid: 'article:author', name: 'article:author', content: 'Kevin Peters' },

      { hid: 'og:url', name: 'og:url', content: 'https://kevinpeters.net/about/' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'Blog | Web Dev Stories by Kevin Peters' },
      { hid: 'og:image', name: 'og:image', content: '' },
      { hid: 'og:description', name: 'og:description', content: 'Blog articles by Kevin Peters. Interesting articles about Vue.js, .NET and the whole world of JavaScript.' },

      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@kevinpeters_' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@kevinpeters_' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://kevinpeters.net/about/' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Blog | Web Dev Stories by Kevin Peters' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Blog articles by Kevin Peters. Interesting articles about Vue.js, .NET and the whole world of JavaScript.' },
      { hid: 'twitter:image', name: 'twitter:image', content: '' },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: '' }
    ]
  },
  methods: {
    _toggleNetworkStatus ({ type }) {
      this.online = type === 'online'
    },
    chunkArray(arr, len) {
      const chunks = [];
      const n = arr.length;
      let i = 0;
      while (i < n) {
        chunks.push(arr.slice(i, i += len));
      }
      return chunks;
    },
    redirect(blogpost) {
      this.$router.push(blogpost.url);
    },
  },
  mounted () {
    if (!window.navigator) {
      this.online = false
      return
    }
    this.online = Boolean(window.navigator.onLine)
    window.addEventListener('offline', this._toggleNetworkStatus)
    window.addEventListener('online', this._toggleNetworkStatus)
  },
}
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

.blogposts__articles > div {
  cursor: pointer;
}

@media (min-width: 768px) {
  .blogposts__articles > div {
    padding: 10px;
  }
}
</style>
