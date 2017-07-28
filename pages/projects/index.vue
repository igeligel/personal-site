<template>
  <div>
    <div :class="containerClassList">
      <div class="blogposts__heading">
        <div class="line__wrapper"></div>
        <h1>Projects</h1>
      </div>
      <div class="project__list pure-g">
        <div class="pure-u-lg-1-3 pure-u-md-1-2 pure-u-1-1">
          <div class="project__summary" style="position: relative; cursor: pointer;" @click="showProject">
            <img src="http://svgur.com/i/2M7.svg" style="width: 100%;"></img>
            <img src="http://svgur.com/i/2Lm.svg" class="project__logo"></img>
          </div>
        </div>
        <div class="pure-u-lg-1-3 pure-u-md-1-2 pure-u-1-1">
          <div class="project__summary" style="position: relative; cursor: pointer;" @click="showProject">
            <img src="~assets/svg/gradient-backgrounds/1.svg" style="width: 100%;"></img>
            <img src="~assets/svg/gradient-backgrounds/vue-readme-logo.svg" class="project__logo"></img>
          </div>
        </div>
        <div class="pure-u-lg-1-3 pure-u-md-1-2 pure-u-1-1">
          <div class="project__summary" style="position: relative; cursor: pointer;" @click="showProject">
            <img src="~assets/svg/gradient-backgrounds/2.svg" style="width: 100%;"></img>
            <img src="~assets/svg/gradient-backgrounds/backpack-login-logo.svg" class="project__logo"></img>
          </div>
        </div>
        <div class="pure-u-lg-1-3 pure-u-md-1-2 pure-u-1-1">
          <div class="project__summary" style="position: relative; cursor: pointer;" @click="showProject">
            <img src="~assets/svg/gradient-backgrounds/3.svg" style="width: 100%;"></img>
            <img src="~assets/svg/gradient-backgrounds/teamfortressoutpost-api-logo.svg" class="project__logo"></img>
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
        <h2 class="project-content__heading">skadisteam - a project to allow interacting with steamcommunity.com</h2>
        <p>War klar dass die Hamburger ihre absolut mittelmäßige Stadt wieder auf die eins (abgesehen von offensichtlichen Scherzantworten (Siegen, Wuppertal, Berlin) votieren mussten.</p>
        <p>Ich verstehe gar nicht, wie Hamburger immer darauf kommen, dass sie in der schönsten Stadt des Universums wohnen, wenn es nicht mal die schönste Stadt Deutschlands ist. Jedes mal, wenn es um irgendeine Stadteigenschaft geht kommt der Hamburger an und erzählt, dass das in Hamburg natürlich besser ist. Offensichtlich sogar bei den Straßenmagazinen. Diesen Städtewettbewerb, den die Hamburger überall sehen, scheinen auch nur Hamburger zu kennen. Wenn man in der Hamburger MOPO über den Wettbewerb zwischen Berlin und Hamburg liest, interessiert in Berlin sowas einfach keinen. Wenn jemand einen Spruch bringt wie "Home is where your heart is" und "Zuhause ist es einfach am schönsten", erkennt man den Hamburger daran, dass dieser erstmal erzählt, dass Hamburg schöner ist. Wieso? Keine Ahnung, Hamburg ist einfach geil, weils geil ist. Wenn die Hamburger nicht so unglaublich bescheuert auf ihre eigene Stadt abfahren würden und es nicht jedem bei jeder erdenkbaren Situation auf die Nase binden würden, wäre die Stadt ja ganz durchschnittlich. Aber so? Einfach nicht auszuhalten. Diese Selbstillusion kann ich mir eigentlich nur dadurch erklären, dass Hamburg einfach ein riesiger Kreiswichs ist. Natürlich schwärmt so manch einer von seiner Heimat, aber Hamburger übertreiben es einfach, indem sie zum Beispiel bei einer nüchternen Auflistung von Straßenmagazinen erzählen, dass ihr Straßenmagazin das einzig wahre wäre.</p>
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
    }
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
    showProject() {
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

.project-content > p {
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -.004em;
}

@media (min-width: 700px) {
  .project-content > p {
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

@media (min-width: 768px) {
  .project__summary:hover {
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
}
</style>
