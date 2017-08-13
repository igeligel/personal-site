<template>
  <div class="container">
    <introduction-banner
      :author="author"
      :jobTitle="jobTitle"
      :motto="motto">
    </introduction-banner>
    <site-heading :label="'Recent Blogposts'"></site-heading>
    <blogpost-articles></blogpost-articles>
  </div>
</template>

<script>
import BlogpostArticles from '../components/BlogpostArticles';
import IntroductionBanner from '../components/IntroductionBanner';
import SiteHeading from '../components/SiteHeading';

export default {
  components: {
    BlogpostArticles,
    IntroductionBanner,
    SiteHeading,
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
</style>
