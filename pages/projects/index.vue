<template>
  <div>
    <div :class="containerClassList">
      <div class="blogposts__heading">
        <div class="line__wrapper"></div>
        <h1>Projects</h1>
      </div>
      <div class="project__list pure-g">
        <ProjectCard
          v-for="project in projects"
          :key="project.heading"
          :background="project.background"
          :logo="project.logo"
          :center="project.center"
          v-on:summaryClick="showProject(project)"
        />
      </div>
    </div>
    <div :class="offContainerClassList" ref="offContainer">
      <div class="project__heading">
        <ProjectLinks
          :projectLinks="projectLinks"
        />
      </div>
      <div class="project__close-container" @click="goToMain">
        <CloseSvg />
      </div>
      <ProjectContent
        :heading="projectHeading"
        :description="projectDescription"
      />
    </div>
  </div>
</template>

<script>
import CloseSvg from '~/components/close';
import ProjectLinks from '~/components/ProjectLinks';
import ProjectContent from '~/components/ProjectContent';
import ProjectCard from '~/components/ProjectCard';
import head from './projects-head';
import VueSteamChatHtml from '../../content/projects/vue-steam-chat.md';
import GradientBackground1 from '~/assets/svg/gradient-backgrounds/1.svg';
import GradientBackground2 from '~/assets/svg/gradient-backgrounds/2.svg';
import GradientBackground3 from '~/assets/svg/gradient-backgrounds/3.svg';
import GradientBackground4 from '~/assets/svg/gradient-backgrounds/4.svg';
import TerminalLogo from '~/assets/svg/gradient-backgrounds/terminal.svg';
import SkadisteamLogo from '~/assets/svg/gradient-backgrounds/skadisteam-logo.svg';
import VueReadmeLogo from '~/assets/svg/gradient-backgrounds/vue-readme-logo.svg';
import BackpackLoginLogo from '~/assets/svg/gradient-backgrounds/backpack-login-logo.svg';
import TeamfortressOutpostApiLogo from '~/assets/svg/gradient-backgrounds/teamfortressoutpost-api-logo.svg';
import VueSteamChatLogo from '~/assets/svg/gradient-backgrounds/vue-steam-chat-logo.svg';

export default {
  components: {
    CloseSvg,
    ProjectLinks,
    ProjectContent,
    ProjectCard,
  },
  data() {
    return {
      positionBeforeProjectSummary: 0,
      online: true,
      showMain: true,
      projects: [
        {
          heading: 'vue-steam-chat',
          background: GradientBackground4,
          logo: VueSteamChatLogo,
          center: true,
          links: [
            {
              label: 'GitHub',
              url: 'https://github.com/igeligel/vue-steam-chat',
            },
            {
              label: 'npm',
              url: 'https://www.npmjs.com/package/vue-steam-chat',
            },
            {
              label: 'live',
              url: 'https://codesandbox.io/s/8kyrl4xlzj',
            },
          ],
          description: VueSteamChatHtml,
        },
        {
          heading: 'skadisteam',
          background: TerminalLogo,
          logo: SkadisteamLogo,
          center: false,
          links: [
            {
              label: 'GitHub',
              url: 'https://github.com/igeligel/skadisteam',
            },
          ],
          description:
            '<p>Skadisteam is a .NET Standard project containing several C# class libraries which acts as a wrapper around the Steam Web API. They are designed according to the microservice pattern. Each package has unit tests and uses continuous deployment.</p>',
        },
        {
          heading: 'vue-readme',
          background: GradientBackground1,
          logo: VueReadmeLogo,
          center: true,
          links: [
            {
              label: 'GitHub',
              url: 'https://github.com/igeligel/vue-readme',
            },
            {
              label: 'live',
              url: 'https://igeligel.github.io/vue-readme',
            },
          ],
          description:
            '<p>Serverless vue.js application for creating project readmes in markdown. Easily create and manage the readmes of your GitHub repositories.</p>',
        },
        {
          heading: 'BackpackLogin',
          background: GradientBackground2,
          logo: BackpackLoginLogo,
          center: true,
          links: [
            {
              label: 'GitHub',
              url: 'https://github.com/igeligel/BackpackLogin',
            },
            {
              label: 'nuget',
              url: 'https://www.nuget.org/packages/BackpackLogin',
            },
          ],
          description:
            '<p>A .NET Standard library to handle the login to Backpack.tf. Backpack.tf is a trading site for Team Fortress 2, Counter-Strike: Global Offensive, and Dota 2. Community item pricing, item trading and stats, and much more.</p>',
        },
        {
          heading: 'TeamFortressOutpostApi',
          background: GradientBackground3,
          logo: TeamfortressOutpostApiLogo,
          center: true,
          links: [
            {
              label: 'GitHub',
              url: 'https://github.com/igeligel/TeamFortressOutpostApi',
            },
            {
              label: 'nuget',
              url: 'https://www.nuget.org/packages/TeamFortressOutpostApi',
            },
          ],
          description:
            '<p>An API wrapper for the TF2 Outpost platform. A platform to find great deals for your Team Fortress 2, Counter-Strike: Global Offensive and Dota 2 items with zero hassle.</p>',
        },
      ],
      projectHeading: '',
      projectDescription: '',
      projectLinks: [],
    };
  },
  head,
  computed: {
    containerClassList: function getContainerClassList() {
      return {
        container: true,
        container__off: !this.showMain,
      };
    },
    offContainerClassList: function getOffContainerClassList() {
      return {
        offContainer: true,
        offContainer__show: !this.showMain,
      };
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
  methods: {
    _toggleNetworkStatus({ type }) {
      this.online = type === 'online';
    },
    showProject(project) {
      var doc = document.documentElement;
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      this.positionBeforeProjectSummary = top;
      this.$scrollTo(this.$refs.offContainer, 300, {});
      this.projectHeading = project.heading;
      this.projectDescription = project.description;
      this.projectLinks = project.links;
      this.$refs.offContainer.style.display = 'block';
      this.showMain = false;
    },
    goToMain() {
      this.showMain = true;
      this.$refs.offContainer.style.display = 'none';
      this.$scrollTo(this.$refs.offContainer, 300, {
        offset: this.positionBeforeProjectSummary,
      });
    },
  },
  destroyed() {
    window.removeEventListener('offline', this._toggleNetworkStatus);
    window.removeEventListener('online', this._toggleNetworkStatus);
  },
};
</script>

<style scoped>
.project__close-container {
  position: absolute;
  right: 24px;
  top: 24px;
  cursor: pointer;
}

.project__background {
  width: 100%;
}

.project__list {
  margin-bottom: 75px;
}

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

.offContainer {
  display: none;
  padding-bottom: 75px;
  max-width: 700px;
  margin: auto;
  max-height: calc(100vh - 53px);
  transition: all 0.6s ease;
  position: absolute;
  left: 0;
  top: 0;
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
    left: calc((100vw - 700px) / 2);
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
  opacity: 0;
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
