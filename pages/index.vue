<template>
  <div class="container">
    <div class="header" style="text-align: center">
      <h1>WEBDEV STORIES</h1>
    </div>
    <div class="banner">
      <h2>Hey I am Kevin</h2>
      <h3>I am a Fullstack Developer</h3>
      <h3>Think twice - code once</h3>
    </div>
    <div class="blogposts__heading">
      <div class="line__wrapper"></div>
      <h2>Recent Blogposts</h2>
    </div>
    <div class="blogposts__articles pure-g" style="padding-left: 24px; padding-right: 24px;">
      <div class="pure-u-1-1 blogpost__article">
        <div class="blogpost__article__image">
          <img src="http://i.imgur.com/tS6vDB5.png" alt=""></img>
        </div>
        <div class="blogpost__article__content">
          <h2>jQuery Selector Performance</h2>
          <p>Are jQuery selectors a good idea and how can we improve performance. A good guide on how to reduce loading times inside of big JavaScript applications. With the help of the Chrome developer tools (dev tools) we will analyse on how to optimize jQuery selectors.</p>
        </div>
      </div>
      <div class="pure-u-1-1 blogpost__article">
        <div class="blogpost__article__image">
          <img src="http://i.imgur.com/tS6vDB5.png" alt=""></img>
        </div>
        <div class="blogpost__article__content">
          <h2>jQuery Selector Performance</h2>
          <p>Are jQuery selectors a good idea and how can we improve performance. A good guide on how to reduce loading times inside of big JavaScript applications. With the help of the Chrome developer tools (dev tools) we will analyse on how to optimize jQuery selectors.</p>
        </div>
      </div>
      <div class="pure-u-1-1 blogpost__more">
        <router-link to="/blog">Read more</router-link>
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
.container {
  padding-bottom: 75px;
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

.blogpost__article {
  margin-top: 16px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
}

.blogpost__article__image img {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: 1px solid #4096c4;
  width: 100%;
}

.blogpost__article__content {
  padding-top: 16px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 16px;
}


.blogpost__article h2 {
  font-size: 18px;
  font-weight: 400;
  padding-bottom: 8px;
}

.blogpost__article p {
  font-size: 14px;
  font-weight: 400;
}

* {
  font-family: 'Lato', sans-serif;
}

.header {
  display: block;
  box-sizing: border-box;
}

h1 {
  font-weight: 300;
  font-size: 24px;
  color: #4096c4;
  margin: 0;
  margin-bottom: 30px;
  margin-top: 24px;
}

h2 {

  font-weight: 300;
  color: #706f6f;
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
}

.banner h2 {
  color: #ffffff;
}

.banner h3 {
  color: #ffffff;
}

.blogposts__heading {
  padding-top: 24px;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 8px;
  display: inline-block;
}

.blogposts__heading h2 {
  font-weight: 400;
  color: #4096c4;
  font-size: 18px;
  margin-left: 45px;
  display: inline-block;
}
</style>
