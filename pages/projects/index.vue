<template>
  <div class="container">
    <div class="blogposts__heading">
      <div class="line__wrapper"></div>
      <h1>Projects</h1>
    </div>
    <div class="project__list pure-g">
      <div class="project__summary pure-u-1-1">
        <h2>Freelance Web Developer</h2>
        <img src="http://i.imgur.com/5JsIdre.png"></img>
        <ul>
          <li>
            Developed an eSport focussed site
          </li>
          <li>
            Built with ASP.NET, jQuery, Bootstrap
          </li>
        </ul>
        <div class="pure-u-1-1 blogpost__more">
          <router-link to="/">See more</router-link>
        </div>
      </div>
      <div class="project__divider pure-u-1-1"></div>
      <div class="project__summary pure-u-1-1">
        <h2>Skadisteam</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg" style="height: 100px;"></img>
        <ul>
          <li>
            Reverse engineered the steam web API
          </li>
          <li>
            Built with .NET Standard, .NET Core
          </li>
        </ul>
        <div class="pure-u-1-1 blogpost__more">
          <router-link to="/">See more</router-link>
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
.project__divider {
  width: 100%;
  border-top: 1px solid #dbdbdb;
  margin-top: 16px;
}

.project__summary {
  color: #706f6f;
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

.project__summary h2 {
  font-size: 18px;
  font-weight: 400;
}

.project__summary img {
  width: 100%;
}

.project__summary ul {
  font-size: 14px;
  font-weight: 400;
}

.project__summary li {
  margin-top: 16px;
  line-height: 14px;
}
.project__summary li::before {
  content: "-";
  text-indent: -20px;
}

.project__summary a {
  color: #4096c4;
  text-decoration: none;
}

.project__summary a:link {
  color: #4096c4;
  text-decoration: none;
}

.project__summary a:visited {
  color: #4096c4;
  text-decoration: none;
}

.container {
  padding-bottom: 75px;
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
