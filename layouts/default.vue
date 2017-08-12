<template>
  <div>
    <div class="navbar">
      <div class="navbar__title" style="display: inline-block;">
        <h1 style="display: inline-block;"><router-link to="/" style="color: #4096c4; text-decoration: none;">WEB DEV STORIES</router-link></h1>
      </div>
      <div class="menu">
        <ul style="margin-top: calc(0.67em + 10px);">
          <li class="menu__item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="menu__item">
            <router-link to="/blog">Blog</router-link>
          </li>
          <li class="menu__item">
            <router-link to="/projects">Projects</router-link>
          </li>
          <li class="menu__item">
          <router-link to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <nuxt/>
    </div>
    <div class="mobile-menu">
      <div class="pure-g">
        <div class="pure-u-1-4" style="text-align: center; display: flex; height: 53px;">
          <router-link to="/" style="margin: auto;">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34" height="34" viewBox="0 0 34 34" style="margin: auto;">
              <path d="M16 2.672l-5.331 5.331v-2.133h-4.265v6.398l-3.755 3.755 0.754 0.754 12.597-12.597 12.597 12.597 0.754-0.754-13.351-13.351zM7.47 6.937h2.132v2.132l-2.133 2.133v-4.265z" :fill="this.$route.name === 'index' ? '#4096c4' : '#000000'"></path>
              <path d="M6.404 16.533v12.795h7.464v-7.464h4.265v7.464h7.464v-12.795l-9.596-9.596-9.596 9.596zM24.53 28.262h-5.331v-7.464h-6.398v7.464h-5.331v-11.287l8.53-8.53 8.53 8.53v11.287z" :fill="this.$route.name === 'index' ? '#4096c4' : '#000000'"></path>
            </svg>
          </router-link>
        </div>
        <div class="pure-u-1-4" style="text-align: center; display: flex; height: 53px;">
          <router-link to="/blog" style="margin: auto;">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34" height="34" viewBox="0 0 34 34">
              <path d="M9.069 2.672v14.928h-6.397c0 0 0 6.589 0 8.718s1.983 3.010 3.452 3.010c1.469 0 16.26 0 20.006 0 1.616 0 3.199-1.572 3.199-3.199 0-1.175 0-23.457 0-23.457h-20.259zM6.124 28.262c-0.664 0-2.385-0.349-2.385-1.944v-7.652h5.331v7.192c0 0.714-0.933 2.404-2.404 2.404h-0.542zM28.262 26.129c0 1.036-1.096 2.133-2.133 2.133h-17.113c0.718-0.748 1.119-1.731 1.119-2.404v-22.12h18.126v22.391z" :fill="this.$route.name === 'blog' ? '#4096c4' : '#000000'"></path>
              <path d="M12.268 5.871h13.861v1.066h-13.861v-1.066z" :fill="this.$route.name === 'blog' ? '#4096c4' : '#000000'"></path>
              <path d="M12.268 20.265h13.861v1.066h-13.861v-1.066z" :fill="this.$route.name === 'blog' ? '#4096c4' : '#000000'"></path>
              <path d="M12.268 23.997h13.861v1.066h-13.861v-1.066z" :fill="this.$route.name === 'blog' ? '#4096c4' : '#000000'"></path>
              <path d="M26.129 9.602h-13.861v7.997h13.861v-7.997zM25.063 16.533h-11.729v-5.864h11.729v5.864z" :fill="this.$route.name === 'blog' ? '#4096c4' : '#000000'"></path>
            </svg>
          </router-link>
        </div>
        <div class="pure-u-1-4" style="text-align: center; display: flex; height: 53px;">
          <router-link to="/projects" style="margin: auto;">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34" height="34" viewBox="0 0 34 34" style="margin: auto;">
              <path d="M26.663 7.737h-13.861v-0.533c0-1.178-0.955-2.133-2.133-2.133h-5.331c-1.178 0-2.132 0.955-2.132 2.133v17.593c0 1.178 0.955 2.133 2.132 2.133h21.325c1.178 0 2.133-0.955 2.133-2.133v-14.928c0-1.178-0.955-2.133-2.133-2.133zM4.271 7.203c0-0.588 0.479-1.066 1.066-1.066h5.331c0.588 0 1.066 0.478 1.066 1.066v1.599h14.928c0.588 0 1.066 0.478 1.066 1.066v1.066h-23.457v-3.732zM26.663 25.863h-21.325c-0.588 0-1.066-0.479-1.066-1.066v-12.795h23.457v12.795c0 0.588-0.479 1.066-1.066 1.066z" :fill="this.$route.name === 'projects' ? '#4096c4' : '#000000'"></path>
            </svg>
          </router-link>
        </div>
        <div class="pure-u-1-4" style="text-align: center; display: flex; height: 53px;">
          <router-link to="/about" style="margin: auto;">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34" height="34" viewBox="0 0 34 34" style="margin: auto;">
              <path d="M16 3.205c-7.067 0-12.795 5.728-12.795 12.795s5.728 12.795 12.795 12.795 12.795-5.728 12.795-12.795c0-7.067-5.728-12.795-12.795-12.795zM16 4.271c6.467 0 11.729 5.261 11.729 11.729 0 2.845-1.019 5.457-2.711 7.49-1.169-0.488-3.93-1.446-5.638-1.951-0.146-0.046-0.169-0.053-0.169-0.66 0-0.501 0.206-1.005 0.407-1.432 0.218-0.464 0.476-1.244 0.569-1.944 0.259-0.301 0.612-0.895 0.839-2.026 0.199-0.997 0.106-1.36-0.026-1.7-0.014-0.036-0.028-0.071-0.039-0.107-0.050-0.234 0.019-1.448 0.189-2.391 0.118-0.647-0.030-2.022-0.921-3.159-0.562-0.719-1.638-1.601-3.603-1.724l-1.078 0.001c-1.932 0.122-3.008 1.004-3.57 1.723-0.89 1.137-1.038 2.513-0.92 3.159 0.172 0.943 0.239 2.157 0.191 2.387-0.010 0.040-0.025 0.075-0.040 0.111-0.131 0.341-0.225 0.703-0.025 1.7 0.226 1.131 0.579 1.725 0.839 2.026 0.092 0.7 0.35 1.48 0.569 1.944 0.159 0.339 0.234 0.801 0.234 1.454 0 0.607-0.023 0.614-0.159 0.657-1.767 0.522-4.579 1.538-5.628 1.997-1.725-2.042-2.768-4.679-2.768-7.555 0-6.467 5.261-11.729 11.729-11.729zM7.811 24.386c1.201-0.49 3.594-1.344 5.167-1.808 0.914-0.288 0.914-1.058 0.914-1.677 0-0.513-0.035-1.269-0.335-1.908-0.206-0.438-0.442-1.189-0.494-1.776-0.011-0.137-0.076-0.265-0.18-0.355-0.151-0.132-0.458-0.616-0.654-1.593-0.155-0.773-0.089-0.942-0.026-1.106 0.027-0.070 0.053-0.139 0.074-0.216 0.128-0.468-0.015-2.005-0.17-2.858-0.068-0.371 0.018-1.424 0.711-2.311 0.622-0.795 1.563-1.238 2.764-1.315l1.011-0.001c1.233 0.078 2.174 0.521 2.797 1.316 0.694 0.887 0.778 1.94 0.71 2.312-0.154 0.852-0.298 2.39-0.17 2.857 0.022 0.078 0.047 0.147 0.074 0.217 0.064 0.163 0.129 0.333-0.025 1.106-0.196 0.977-0.504 1.461-0.655 1.593-0.103 0.091-0.168 0.218-0.18 0.355-0.051 0.588-0.286 1.338-0.492 1.776-0.236 0.502-0.508 1.171-0.508 1.886 0 0.619 0 1.389 0.924 1.68 1.505 0.445 3.91 1.271 5.18 1.77-2.121 2.1-5.035 3.4-8.248 3.4-3.183 0-6.073-1.277-8.188-3.342z" :fill="this.$route.name === 'about' ? '#4096c4' : '#000000'"></path>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu {
  float: right;
  height: 100%;
}

@media (max-width: 1030px) {
  .menu {
    margin-right: 30px;
  }
}

.menu__item {
  display: inline-block;
  margin-right: 5px;
  font-weight: 300;
}

.menu__item:last-child {
  margin-right: 0px;
}

.menu__item > a {
  color: #4096c4;
  padding: 4px 8px;
  border-radius: 5px;
  border: 1px solid transparent;
  text-decoration: none;
  box-sizing: border-box;
}

.menu__item > a:link {
  color: #4096c4;
  text-decoration: none;
}

.menu__item > a:visited {
  color: #4096c4;
  text-decoration: none;
}

.menu__item > a:hover {
  border: 1px solid #c2e9fb;
}

* {
  font-family: 'Lato', sans-serif;
}

.navbar {
  height: 78px;
  width: 100%;
  color: #4096c4;
  max-width: 1000px;
  margin: auto;
}

@media (max-width: 767px) {
  .navbar {
    display: none;
  }
}

.navbar__title  {
  padding-left: 20px;
}

.navbar__title > h1 {
  font-size: 24px;
  font-weight: 300;
}

.mobile-menu {
  position: fixed;
  bottom: 0;
  height: 53px;
  width: 100%;
  background-color: #f9f9f9;
  border-top: 2px solid #e9f7ff;
}

@media (min-width: 768px) {
  .mobile-menu {
    display: none;
  }
}
</style>


<style>
html
{
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<script>
export default {
  data() {
    return {
      test: 'dwawaddaw',
    };
  },
};
</script>
