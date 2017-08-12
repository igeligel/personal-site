<template>
  <div class="container">
    <div class="banner">
      <h2>Hey, I am {{author}}</h2>
      <h3>I am a {{jobTitle}}</h3>
      <h3 v-text="motto"></h3>
    </div>
    <div class="blogposts__heading">
      <div class="line__wrapper"></div>
      <h2>Recent Blogposts</h2>
    </div>
    <blogpost-articles></blogpost-articles>
  </div>
</template>

<script>
import BlogpostArticles from '../components/BlogpostArticles';

export default {
  components: {
    BlogpostArticles,
  },
  data () {
    return {
      online: true,
      title: 'WEB DEV STORIES',
      author: 'Kevin',
      jobTitle: 'Full Stack Developer',
      motto: 'Think twice - code once',
    }
  },
  head: {
    title: 'Home | Web Dev Stories by Kevin Peters',
    meta: [
      { hid: 'description', name: 'description', content: 'Web Dev Stories by Kevin Peters' },
      { hid: 'subject', name: 'subject', content: 'Homepage of Kevin Peters' },
      { hid: 'abstract', name: 'abstract', content: 'Homepage of Kevin Peters, a web developer enthusiast from Berlin. He likes Vue.js and .NET.' },
      { hid: 'url', name: 'url', content: 'https://kevinpeters.net' },

      { hid: 'article:author', name: 'article:author', content: 'Kevin Peters' },
      { hid: 'og:url', name: 'og:url', content: 'https://kevinpeters.net' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'Home | Web Dev Stories by Kevin Peters' },
      { hid: 'og:image', name: 'og:image', content: '' },
      { hid: 'og:description', name: 'og:description', content: 'Homepage of Kevin Peters. Find cool blog posts about .NET and Vue.js' },

      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@kevinpeters_' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@kevinpeters_' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://kevinpeters.net' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Home | Web Dev Stories by Kevin Peters' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Homepage of Kevin Peters. Find cool blog posts about .NET and Vue.js' },
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
  },
  destroyed () {
    window.removeEventListener('offline', this._toggleNetworkStatus)
    window.removeEventListener('online', this._toggleNetworkStatus)
  }
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
  margin:auto;
}

.header {
  display: block;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .header {
    display: none;
  }
}

h2 {
  font-weight: 300;
  font-size: 24px;
}

h3 {
  font-weight: 300;
  color: #706f6f;
  font-size: 14px;
}

.banner {
  padding-left: 45px;
  padding-right: 45px;
  padding-top: 24px;
  padding-bottom: 32px;
  background: #a1c4fd;
  background: linear-gradient(to right, #a1c4fd 0%,#c2e9fb 100%);
  width: 100vw;
}

@media (min-width: 1000px) {
  .banner {
    margin-left: calc(50vw - (100vw - 1000px / 2));
    padding-left: calc((100vw - 1000px) / 2 + 20px);
  }
}

.banner h2 {
  color: #1e2c44;
}

.banner h3 {
  color: #1e2c44;
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
</style>
