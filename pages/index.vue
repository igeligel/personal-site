<template>
  <div class="container">
    <IntroductionBanner :author="author" :jobTitle="jobTitle" :motto="motto" />
    <SiteHeading :label="'Recent Blogposts'" />
    <BlogpostArticles />
  </div>
</template>

<script>
import BlogpostArticles from '~/components/BlogpostArticles';
import IntroductionBanner from '~/components/IntroductionBanner';
import SiteHeading from '~/components/SiteHeading';
import head from './home-head';

export default {
  components: {
    BlogpostArticles,
    IntroductionBanner,
    SiteHeading,
  },
  data() {
    return {
      online: true,
      title: 'WEB DEV STORIES',
      author: 'Kevin',
      jobTitle: 'Full Stack Developer',
      motto: 'Think twice - code once',
    };
  },
  head,
  mounted() {
    if (!window.navigator) {
      this.online = false;
      return;
    }
    this.online = Boolean(window.navigator.onLine);
    window.addEventListener('offline', this._toggleNetworkStatus);
    window.addEventListener('online', this._toggleNetworkStatus);
  },
  methods: {
    _toggleNetworkStatus({ type }) {
      this.online = type === 'online';
    },
  },
  destroyed() {
    window.removeEventListener('offline', this._toggleNetworkStatus);
    window.removeEventListener('online', this._toggleNetworkStatus);
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
</style>
