<template>
  <div class="blogpost__article">
    <router-link
      class="blogpost__article-link"
      :aria-label="ariaLabel"
      :to="blogpost.url"
    >
      <img
        class="blogpost__article-image"
        :src="blogpost.previewImage"
        :alt="blogpost.altTag"
      />
      <div class="blogpost__article-content">
        <h2 class="blogpost__article-title" v-text="blogpost.title" />
        <p
          class="blogpost__article-description"
          v-text="blogpost.description"
        />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BlogpostArticle',
  props: {
    blogpost: Object,
  },
  computed: {
    ariaLabel() {
      return `Link to blogpost ${this.blogpost.title}`;
    },
  },
};
</script>

<style scoped lang="scss">
$border-color: #dbdbdb;
$image-border-color: #4096c4;

.blogpost__article {
  cursor: pointer;
  margin-top: 1em;
  border-radius: 0.25em;
  border: 1px solid $border-color;
}

.blogpost__article-link {
  color: black;
  text-decoration: none;
}

.blogpost__article-image {
  border-top-left-radius: 0.25em;
  border-top-right-radius: 0.25em;
  border-bottom: 1px solid $image-border-color;
  width: 100%;
}

.blogpost__article-content {
  padding: 1em 0.75em;
}

.blogpost__article-title {
  font-size: 1.125em;
  font-weight: 400;
  padding-bottom: 0.45em;
}

.blogpost__article-description {
  font-size: 0.875em;
  font-weight: 400;
}
</style>
