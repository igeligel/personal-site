<template>
  <div class="container">
    <div class="pure-g">
      <div class="pure-u-1-2">
        <img class="profile-image" src="~assets/img/profile-border-radius.png" alt="image of kevin peters">
      </div>
      <div class="pure-u-1-2">
        <profile-links :socialMedia="socialMedia"></profile-links>
      </div>
    </div>
    <div class="content">
      <h1>About me</h1>
      <p>Hey there, I’m Kevin! I am a web developer living in Berlin. I love crafting stuff in the web and am really deep into <vue-inline-svg></vue-inline-svg> and .NET</p>
      <a class="content__link" rel="noopener noreferrer" :href="resume" target="_blank">
        Resume <arrow-upper-right-svg></arrow-upper-right-svg>
      </a>
      <h2 class="content__second-heading">Technologies I use</h2>
      <technologies-list></technologies-list>
    </div>
  </div>
</template>

<script>
import ArrowUpperRightSvg from '../../components/ArrowUpperRight';
import VueInlineSvg from '../../components/technology-icons/VueInline';

import ProfileLinks from '../../components/ProfileLinks';
import TechnologiesList from '../../components/TechnologiesList';
import head from './about-head';

export default {
  head,
  components: {
    ArrowUpperRightSvg,
    VueInlineSvg,
    ProfileLinks,
    TechnologiesList,
  },
  data () {
    return {
      online: true,
      socialMedia: {
        twitter: 'https://twitter.com/kevinpeters_',
        email: 'mailto:kevinpeterscareer@gmail.com',
        linkedin: 'https://www.linkedin.com/in/kevinpetersde',
        xing: 'https://www.xing.com/profile/Kevin_Peters32',
        medium: 'https://medium.com/@kevin_peters',
      },
      resume: 'https://drive.google.com/file/d/0B5bsFD4wxCdmczVJQnFLWXAwNEU/view?usp=sharing',
    }
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
    }
  },
  destroyed () {
    window.removeEventListener('offline', this._toggleNetworkStatus)
    window.removeEventListener('online', this._toggleNetworkStatus)
  }
};
</script>

<style scoped>
.profile-image {
  width: 117px;
  float: right;
}

.container {
  padding-bottom: 65px;
  max-width: 1000px;
  margin: auto;
}

.content__second-heading {
  font-weight: 300;
  font-size: 16px;
  line-height: 25px;
  margin-bottom: 8px;
}

.content__link {
  line-height: 42px;
  font-size: 18px;
  color: #4096c4;
  padding-left: 5px;
}

.content__link:link {
  text-decoration: none;
}

.content__link:visited {
  text-decoration: none;
}

.content__link:hover {
  text-decoration: none;
}

.content__link:active {
  text-decoration: none;
}

.content {
  padding-left: 25px;
  padding-right: 25px;
}

h1 {
  font-size: 25px;
  font-weight: 300;
  margin-top: 19px;
  margin-bottom: 19px;
  color: #706f6f;
}

p {
  font-size: 16px;
  color: #706f6f;
  font-weight: 300;
  line-height: 25px;
}

* {
  font-family: 'Lato', sans-serif;
  text-rendering: optimizeLegibility;
}
</style>
