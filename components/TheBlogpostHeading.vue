<template>
  <div class="blogposts-heading__container">
    <h2 class="blogposts-heading__heading--second">Blogposts</h2>
  </div>
</template>

<script>
export default {
  name: 'TheBlogpostHeading',
};
</script>

<style lang="scss" scoped>
$text-color: #4096c4;

.blogposts-heading {
  &__container {
    border-bottom: 1px solid #dbdbdb;
    display: inline-block;
    font-family: 'Lato', sans-serif;
    padding-top: 1.5em;
    padding-bottom: 0.5em;
    text-rendering: optimizeLegibility;

    @media (min-width: 1000px) {
      border-bottom: 1px solid transparent;
    }
  }

  &__heading--second {
    color: $text-color;
    display: inline-block;
    font-size: 1.125em;
    font-weight: 400;
    margin-left: 2.5em;
  }
}
</style>
