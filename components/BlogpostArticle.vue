<template>
  <router-link :to="blogpost.url">
    <div class="blogpost__article">
      <div class="blogpost__article__image">
        <img :src="blogpost.previewImage" :alt="blogpost.altTag"></img>
      </div>
      <div class="blogpost__article__content">
        <h2 v-text="blogpost.title"></h2>
        <p v-text="blogpost.description"></p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'blogpost-article',
  props: {
    blogpost: Object,
  },
};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}

.blogpost__article {
  cursor: pointer;
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
</style>
