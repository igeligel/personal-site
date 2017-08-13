<template>
  <div class="blogposts__heading">
    <div class="line__wrapper"></div>
    <h2 v-text="label"></h2>
  </div>
</template>

<script>
export default {
  name: 'site-heading',
  props: {
    label: String,
  },
};
</script>

<style lang="scss" scoped>
.blogposts__heading {
  padding-top: 24px;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 8px;
  display: inline-block;

  h2 {
    font-weight: 400;
    color: #4096c4;
    font-size: 18px;
    margin-left: 45px;
    display: inline-block;
  }
}

@media (min-width: 1000px) {
  .blogposts__heading {
    border-bottom: 1px solid transparent;
  }
}
</style>
