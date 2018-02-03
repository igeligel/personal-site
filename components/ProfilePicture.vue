<template>
  <img
    class="profile-picture"
    :src="image"
    :alt="imageAlternateText"
  />
</template>

<script>
export default {
  name: 'ProfilePicture',
  props: {
    name: String,
    image: String,
  },
  computed: {
    imageAlternateText() {
      return `image of ${this.name}`;
    },
  },
};
</script>

<style scoped lang="scss">
.profile-picture {
  float: right;
}
</style>
