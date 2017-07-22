<template>
  <div class="container">
    <div class="blogposts__heading">
      <div class="line__wrapper"></div>
      <h1>Projects</h1>
    </div>
    <div class="project__list pure-g">
      <div class="pure-u-lg-1-3 pure-u-md-1-2 pure-u-1-1">
        <div class="project__summary" style="position: relative;">
          <img src="http://svgur.com/i/2M7.svg" style="width: 100%;"></img>
          <img src="http://svgur.com/i/2Lm.svg" class="project__logo"></img>
        </div>
      </div>
      <div class="pure-u-lg-1-3 pure-u-md-1-2 pure-u-1-1">
        <div class="project__summary" style="position: relative;">
          <img src="http://svgur.com/i/2M7.svg" style="width: 100%;"></img>
          <img src="http://svgur.com/i/2Lm.svg" class="project__logo"></img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        online: true
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
  }
</script>

<style scoped>
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

.container {
  padding-bottom: 75px;
  max-width: 1000px;
  margin: auto;
  max-height: calc(100vh - 53px);
}

.blogposts__heading {
  padding-top: 24px;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 8px;
  display: inline-block;
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
