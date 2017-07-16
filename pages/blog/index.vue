<template>
  <div class="container">
    <div class="blogposts__heading">
      <div class="line__wrapper"></div>
      <h2>Blogposts</h2>
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
</style>
