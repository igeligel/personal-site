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

<style scoped>
.blogpost__article-link {
  color: black;
  text-decoration: none;
}

.blogpost__article {
  cursor: pointer;
  margin-top: 16px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
}

.blogpost__article-image {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: 1px solid #4096c4;
  width: 100%;
}

.blogpost__article-content {
  padding-top: 16px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 16px;
}

.blogpost__article-title {
  font-size: 18px;
  font-weight: 400;
  padding-bottom: 8px;
}

.blogpost__article-description {
  font-size: 14px;
  font-weight: 400;
}
</style>
