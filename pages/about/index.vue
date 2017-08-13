<template>
  <div class="container">
    <div class="pure-g">
      <div class="pure-u-1-2">
        <img src="~assets/img/profile-border-radius.png" alt="image of kevin peters" style="width: 117px;  float: right;">
      </div>
      <div class="pure-u-1-2">
        <div>
          <a :href="socialMedia.twitter" target="_blank" rel="noopener noreferrer">
            <twitter-svg></twitter-svg>
          </a>
          <a :href="socialMedia.email" target="_blank" rel="noopener noreferrer">
            <email-svg></email-svg>
          </a>
        </div>
        <div>
          <a :href="socialMedia.linkedin" target="_blank" rel="noopener noreferrer">
            <linkedin-svg></linkedin-svg>
          </a>
          <a :href="socialMedia.xing" target="_blank" rel="noopener noreferrer">
            <xing-svg></xing-svg>
          </a>
        </div>
        <div>
          <a :href="socialMedia.medium" target="_blank" rel="noopener noreferrer">
            <medium-svg></medium-svg>
          </a>
        </div>
      </div>
    </div>
    <div class="content">
      <h1>About me</h1>
      <p>Hey there, I’m Kevin! I am a web developer living in Berlin. I love crafting stuff in the web and am really deep into <vue-inline-svg></vue-inline-svg> and .NET</p>
      <a class="content__link" rel="noopener noreferrer" href="https://drive.google.com/file/d/0B5bsFD4wxCdmczVJQnFLWXAwNEU/view?usp=sharing" target="_blank">
        Résumé <arrow-upper-right-svg></arrow-upper-right-svg>
      </a>
      <h2 class="content__second-heading">Technologies I use</h2>
      <technologies-list></technologies-list>
    </div>
  </div>
</template>

<script>
import EmailSvg from '../../components/general-icons/Email';
import LinkedinSvg from '../../components/general-icons/Linkedin';
import MediumSvg from '../../components/general-icons/Medium';
import TwitterSvg from '../../components/general-icons/Twitter';
import XingSvg from '../../components/general-icons/Xing';

import ArrowUpperRightSvg from '../../components/ArrowUpperRight';
import VueInlineSvg from '../../components/technology-icons/VueInline';

import TechnologiesList from '../../components/TechnologiesList';

export default {
  head: {
    title: 'About | Web Dev Stories by Kevin Peters',
    meta: [
      { hid: 'description', name: 'description', content: 'About page of Kevin Peters. Here are several personal information about the programmer and web developer Kevin Peters.' },
      { hid: 'subject', name: 'subject', content: 'Information about Kevin Peters' },
      { hid: 'abstract', name: 'abstract', content: 'Information about Kevin Peters' },
      { hid: 'url', name: 'url', content: 'https://kevinpeters.net/about/' },
      { hid: 'article:author', name: 'article:author', content: 'Kevin Peters' },

      { hid: 'og:url', name: 'og:url', content: 'https://kevinpeters.net/about/' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'About | Web Dev Stories by Kevin Peters' },
      { hid: 'og:image', name: 'og:image', content: '' },
      { hid: 'og:description', name: 'og:description', content: 'About page of Kevin Peters. Here are several personal information about the programmer and web developer Kevin Peters.' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@kevinpeters_' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@kevinpeters_' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://kevinpeters.net/about/' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'About | Web Dev Stories by Kevin Peters' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'About page of Kevin Peters. Here are several personal information about the programmer and web developer Kevin Peters.' },
      { hid: 'twitter:image', name: 'twitter:image', content: '' },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: '' }
    ]
  },
  components: {
    EmailSvg,
    LinkedinSvg,
    MediumSvg,
    TwitterSvg,
    XingSvg,
    ArrowUpperRightSvg,
    VueInlineSvg,
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
