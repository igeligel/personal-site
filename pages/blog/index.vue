<template>
  <div class="container">
    <div class="blogposts__heading">
      <div class="line__wrapper"></div>
      <h2>Blogposts</h2>
    </div>
    <div class="blogposts__articles pure-g" style="padding-left: 24px; padding-right: 24px;" v-bind:key="blogpostChunk[0].title + blogpostChunk[0].url" v-for="blogpostChunk in chunkedBlogPosts">
      <div class="pure-u-lg-1-3 pure-u-md-1-2 pure-u-1-1" v-for="blogpost in blogpostChunk" v-bind:key="blogpost.title" @click="redirect(blogpost)">
        <div class="blogpost__article">
          <div class="blogpost__article__image">
            <img :src="blogpost.previewImage" :alt="blogpost.altTag"></img>
          </div>
          <div class="blogpost__article__content">
            <h2 v-text="blogpost.title"></h2>
            <p v-text="blogpost.description"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blogPosts from '../../content/blogposts';
export default {
  computed: {
    chunkedBlogPosts: function getChunkedBlogposts() {
      return this.chunkArray(this.blogposts, 3);
    }
  },
  data () {
    return {
      blogposts: blogPosts,
      online: true
    }
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
  mounted () {
    if (!window.navigator) {
      this.online = false
      return
    }
    this.online = Boolean(window.navigator.onLine)
    window.addEventListener('offline', this._toggleNetworkStatus)
    window.addEventListener('online', this._toggleNetworkStatus)
  },
  methods: {
    _toggleNetworkStatus ({ type }) {
      this.online = type === 'online'
    },
    chunkArray(arr, len) {
      var chunks = [];
      var i = 0;
      var n = arr.length;
      while (i < n) {
        chunks.push(arr.slice(i, i += len));
      }
      return chunks;
    },
    redirect(blogpost) {
      this.$router.push(blogpost.url);
    },
  },
  destroyed () {
    window.removeEventListener('offline', this._toggleNetworkStatus)
    window.removeEventListener('online', this._toggleNetworkStatus)
  }
}
</script>

<style scoped>
.blogposts__articles > div {
  cursor: pointer;
}

@media (min-width: 768px) {
  .blogposts__articles > div {
    padding: 10px;
  }
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

.blogpost__article {
  margin-top: 16px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
}

.blogpost__article__image img {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: 1px solid #4096c4;
  width: 100%;
}

.blogpost__article__content {
  padding-top: 16px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 16px;
}


.blogpost__article h2 {
  font-size: 18px;
  font-weight: 400;
  padding-bottom: 8px;
}

.blogpost__article p {
  font-size: 14px;
  font-weight: 400;
}

* {
  font-family: 'Lato', sans-serif;
  text-rendering: optimizeLegibility;
}
</style>
