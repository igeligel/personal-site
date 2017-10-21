<template>
  <div class="pure-u-1-4 menu__column--mobile">
    <router-link class="menu__icon--mobile" :to="route" :aria-label="`Link to ${route}`">
      <slot name="icon"></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MobileMenuItem',
  props: {
    route: String,
  },
};
</script>

<style scoped>
.menu__column--mobile {
  text-align: center;
  display: flex;
  height: 53px;
}

.menu__icon--mobile {
  margin: auto;
}
</style>
