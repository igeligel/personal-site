<template>
  <div class="navbar">
    <div class="navbar__title">
      <h1>
        <router-link to="/">web dev stories</router-link>
      </h1>
    </div>
    <div class="menu">
      <ul class="menu__list">
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
</template>

<script>
export default {
  name: 'DesktopMenu',
};
</script>

<style scoped>
.menu__list {
  margin-top: calc(0.67em + 10px);
}

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
  display: inline-block;
}

.navbar__title > h1 > a {
  color: #4096c4;
  text-decoration: none;
  text-transform: uppercase;
}

.navbar__title > h1 {
  font-size: 24px;
  font-weight: 300;
}
</style>
