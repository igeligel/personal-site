<template>
  <div class="menu--mobile">
    <div class="pure-g">
      <mobile-menu-item :route="'/'">
        <home-icon slot="icon"></home-icon>
      </mobile-menu-item>
      <mobile-menu-item :route="'/blog'">
        <blog-icon slot="icon"></blog-icon>
      </mobile-menu-item>
      <mobile-menu-item :route="'/projects'">
        <project-icon slot="icon"></project-icon>
      </mobile-menu-item>
      <mobile-menu-item :route="'/about'">
        <profile-icon slot="icon"></profile-icon>
      </mobile-menu-item>
    </div>
  </div>
</template>

<script>
import NavigationIcons from '../components/navigations-icons';
import MobileMenuItem from './MobileMenuItem';

export default {
  components: {
    'home-icon': NavigationIcons.Home,
    'blog-icon': NavigationIcons.Blog,
    'project-icon': NavigationIcons.Project,
    'profile-icon': NavigationIcons.Profile,
    MobileMenuItem,
  },
  name: 'MobileMenu',
};
</script>

<style scoped>
.menu--mobile {
  position: fixed;
  bottom: 0;
  height: 53px;
  width: 100%;
  background-color: #f9f9f9;
  border-top: 2px solid #e9f7ff;
}

@media (min-width: 768px) {
  .menu--mobile {
    display: none;
  }
}
</style>
