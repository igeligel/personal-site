<template>
  <div>
    <div :class="containerClassList">
      <div class="blogposts__heading">
        <div class="line__wrapper"></div>
        <h1>Projects</h1>
      </div>
      <div class="project__list pure-g">
        <div class="pure-u-lg-1-3 pure-u-md-1-2 pure-u-1-1">
          <div class="project__summary" style="position: relative; cursor: pointer;" @click="showProject(projects.skadisteam)">
            <img src="~assets/svg/gradient-backgrounds/terminal.svg" style="width: 100%;"></img>
            <img src="~assets/svg/gradient-backgrounds/skadisteam-logo.svg" class="project__logo"></img>
          </div>
        </div>
        <div class="pure-u-lg-1-3 pure-u-md-1-2 pure-u-1-1">
          <div class="project__summary" style="position: relative; cursor: pointer;" @click="showProject(projects.vueReadme)">
            <img src="~assets/svg/gradient-backgrounds/1.svg" style="width: 100%;"></img>
            <img src="~assets/svg/gradient-backgrounds/vue-readme-logo.svg" class="project__logo--center"></img>
          </div>
        </div>
        <div class="pure-u-lg-1-3 pure-u-md-1-2 pure-u-1-1">
          <div class="project__summary" style="position: relative; cursor: pointer;" @click="showProject(projects.backpackLogin)">
            <img src="~assets/svg/gradient-backgrounds/2.svg" style="width: 100%;"></img>
            <img src="~assets/svg/gradient-backgrounds/backpack-login-logo.svg" class="project__logo--center"></img>
          </div>
        </div>
        <div class="pure-u-lg-1-3 pure-u-md-1-2 pure-u-1-1">
          <div class="project__summary" style="position: relative; cursor: pointer;" @click="showProject(projects.teamFortressOutpostApi)">
            <img src="~assets/svg/gradient-backgrounds/3.svg" style="width: 100%;"></img>
            <img src="~assets/svg/gradient-backgrounds/teamfortressoutpost-api-logo.svg" class="project__logo--center"></img>
          </div>
        </div>
      </div>
    </div>
    <div :class="offContainerClassList" ref="offContainer">
      <div class="project__heading">
        <h1>skadisteam</h1>
      </div>
      <div style="position: absolute; right: 24px; top: 24px; cursor: pointer;" @click="goToMain">
        <close-svg></close-svg>
      </div>
      <div class="project-content">
        <h2 class="project-content__heading" v-text="projectHeading"></h2>
        <div v-html="projectDescription"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CloseSvg from '~components/close';

export default {
  components: {
    'close-svg': CloseSvg,
  },
  data () {
    return {
      online: true,
      showMain: true,
      projects: {
        skadisteam: {
          heading: 'skadisteam',
          description: '<p>Skadisteam is a .NET Standard project containing several C# class libraries which acts as a wrapper around the Steam Web API. They are designed in the background of the microservice oattern. Each package has Unit tests and is featured with continuous deployment.</p>',
        },
        vueReadme: {
          heading: 'vue-readme',
          description: '<p>Serverless vue.js application for creating project readmes in markdown. Easily create and manage your readme\'s of your GitHub repositories.</p>',
        },
        backpackLogin: {
          heading: 'BackpackLogin',
          description: '<p>A .NET Standard library to handle the login to Backpack.tf. Backpack.tf is a trading site for Team Fortress 2, Counter-Strike: Global Offensive, and Dota 2. Community item pricing, item trading and stats, and much more.</p>',
        },
        teamFortressOutpostApi: {
          heading: 'TeamFortressOutpostApi',
          description: '<p>An API wrapper for the TF2 Outpost platform. A platform to find great deals for your Team Fortress 2, Counter-Strike: Global Offensive and Dota 2 items with zero hassle.</p>',
        },
      },
      projectHeading: '',
      projectDescription: '',
    }
  },
  head: {
    title: 'Projects | Web Dev Stories by Kevin Peters',
    meta: [
      { hid:'description', name: 'description', content: 'Projects portfolio of Kevin Peters, a web developer specialized in .NET and Vue.js' },
      { hid:'subject', name: 'subject', content: 'Projects of Kevin Peters' },
      { hid:'abstract', name: 'abstract', content: 'Projects of Kevin Peters, a web developer enthusiast from Berlin. This page lists all projects by him.' },
      { hid:'url', name: 'url', content: 'https://kevinpeters.net/projects' },

      { hid:'article:author', name: 'article:author', content: 'Kevin Peters' },
      { hid:'og:url', name: 'og:url', content: 'https://kevinpeters.net/projects' },
      { hid:'og:type', name: 'og:type', content: 'website' },
      { hid:'og:title', name: 'og:title', content: 'Projects | Web Dev Stories by Kevin Peters' },
      { hid:'og:image', name: 'og:image', content: '' },
      { hid:'og:description', name: 'og:description', content: 'Projects portfolio of Kevin Peters, a web developer specialized in .NET and Vue.js' },

      { hid:'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid:'twitter:site', name: 'twitter:site', content: '@kevinpeters_' },
      { hid:'twitter:creator', name: 'twitter:creator', content: '@kevinpeters_' },
      { hid:'twitter:url', name: 'twitter:url', content: 'https://kevinpeters.net' },
      { hid:'twitter:title', name: 'twitter:title', content: 'Projects | Web Dev Stories by Kevin Peters' },
      { hid:'twitter:description', name: 'twitter:description', content: 'Projects portfolio of Kevin Peters, a web developer specialized in .NET and Vue.js' },
      { hid:'twitter:image', name: 'twitter:image', content: '' },
      { hid:'twitter:image:alt', name: 'twitter:image:alt', content: '' }
    ]
  },
  computed: {
    containerClassList: function getContainerClassList() {
      return {
        'container': true,
        'container__off': !this.showMain,
      };
    },
    offContainerClassList: function getOffContainerClassList() {
      return {
        'offContainer': true,
        'offContainer__show': !this.showMain,
      }
    }
  },
  mounted () {
    if (!window.navigator) {
      this.online = false;
      return;
    }
    this.online = Boolean(window.navigator.onLine)
    window.addEventListener('offline', this._toggleNetworkStatus)
    window.addEventListener('online', this._toggleNetworkStatus)
  },
  methods: {
    _toggleNetworkStatus ({ type }) {
      this.online = type === 'online'
    },
    showProject(project) {
      this.projectHeading = project.heading;
      this.projectDescription = project.description;
      this.$refs.offContainer.style.display = 'block';
      this.showMain = false;
    },
    goToMain() {
      this.showMain = true;
      this.$refs.offContainer.style.display = 'none';
    },
  },
  destroyed () {
    window.removeEventListener('offline', this._toggleNetworkStatus)
    window.removeEventListener('online', this._toggleNetworkStatus)
  }
}
</script>

<style scoped>
.project__heading {
  padding-top: 24px;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 8px;
  display: inline-block;
}

@media (min-width: 700px) {
  .project__heading {
    border-bottom: 1px solid transparent;
  }
}

.project__heading h1 {
  font-weight: 400;
  color: #4096c4;
  font-size: 18px;
  margin-left: 45px;
  display: inline-block;
  margin-top: 0;
  margin-bottom: 0;
}

.project-content {
  padding-top: 24px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 75px;
}

.project-content__heading {
  font-size: 24px;
  margin-bottom: 18px;
}

@media (min-width: 700px) {
  .project-content__heading {
    font-size: 32px;
  }
}

.project-content > div {
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -.004em;
}

@media (min-width: 700px) {
  .project-content > div {
    font-size: 19px;
    line-height: 33px;
  }
}

.offContainer {
  display: none;
  padding-bottom: 75px;
  max-width: 700px;
  margin: auto;
  max-height: calc(100vh - 53px);
  transition: all 0.6s ease;
  position: absolute;
  left: 0;
  top:0;
  opacity: 0;
  width: 100vw;
}

@media (min-width: 768px) {
  .offContainer {
    top: 78px;
  }
}

@media (min-width: 700px) {
  .offContainer {
    left: calc((100vw - 700px) / 2)
  }
}

.offContainer__show {
  transition: all 0.6s ease;
  opacity: 1;
}


.container {
  padding-bottom: 75px;
  max-width: 1000px;
  margin: auto;
  max-height: calc(100vh - 53px);
  transition: all 0.3s ease;
}

.container__off {
  opacity: 0.00;
}

.project__summary:hover .project__logo {
  position: absolute;
  width: 30%;
  left: calc((100% - 30%) / 2);
  top: 30%;
}

.project__summary:hover .project__logo--center {
  position: absolute;
  width: 30%;
  left: calc((100% - 30%) / 2);
  top: 20%;
}

@media (min-width: 768px) {
  .project__summary:hover {
    transform: scale(1.08, 1.05);
  }

  .project__logo--center {
    transform: scale(1.08, 1.05);
  }
}


.project__logo {
  position: absolute;
  width: 20%;
  left: calc((100% - 20%) / 2);
  top: 40%;
  transition: all 0.3s ease;
}

.project__logo--center {
  position: absolute;
  width: 20%;
  left: calc((100% - 20%) / 2);
  top: 30%;
  transition: all 0.3s ease;
}

.project__divider {
  width: 100%;
  border-top: 1px solid #dbdbdb;
  margin-top: 16px;
}

.project__summary {
  color: #706f6f;
  transition: all 0.3s ease;
}

.project__summary img {
  margin-top: 16px;
}

.project__summary ul {
  padding: 0;
  padding-left: 8px;
  list-style-type: none;
}

.blogpost__more {
  margin-top: 16px;
  margin-left: 16px;
}

.blogpost__more a {
  font-size: 18px;
  color: #4096c4;
  text-decoration: none;
}

.blogpost__more a:link {
  color: #4096c4;
  text-decoration: none;
}

.blogpost__more a:visited {
  color: #4096c4;
  text-decoration: none;
}

.project__summary {
  margin-top: 16px;
  padding-left: 24px;
  padding-right: 24px;
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

.blogposts__heading h1 {
  font-weight: 400;
  color: #4096c4;
  font-size: 18px;
  margin-left: 45px;
  display: inline-block;
  margin-top: 0;
  margin-bottom: 0;
}

* {
  font-family: 'Lato', sans-serif;
  text-rendering: optimizeLegibility;
}
</style>
