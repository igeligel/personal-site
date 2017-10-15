<template>
  <div class="banner">
    <h2>Hey, I am {{author}}</h2>
    <h3>I am a {{jobTitle}}</h3>
    <h3 v-text="motto"></h3>
  </div>
</template>

<script>
export default {
  name: 'IntroductionBanner',
  props: {
    author: String,
    jobTitle: String,
    motto: String,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  padding-left: 45px;
  padding-right: 45px;
  padding-top: 24px;
  padding-bottom: 32px;
  background: #a1c4fd;
  background: linear-gradient(to right, #a1c4fd 0%,#c2e9fb 100%);
  width: 100vw;
}

@media (min-width: 1000px) {
  .banner {
    margin-left: calc(50vw - (100vw - 1000px / 2));
    padding-left: calc((100vw - 1000px) / 2 + 20px);
  }
}

.banner h2 {
  color: #1e2c44;
  font-weight: 300;
}

.banner h3 {
  color: #1e2c44;
  font-weight: 300;
  font-size: 14px;
}
</style>
