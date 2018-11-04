<template>
  <div class="about-me__content">
    <h1 class="about-me__heading--first">About me</h1>
    <p class="about-me__paragraph">
      Hey there, I’m Kevin! I am a web developer living in Berlin. I love
      crafting stuff in the web and am really deep into <VueInlineSvg /> and
      .NET
    </p>
    <p class="about-me__paragraph">
      You can find my resume on the following link:
    </p>
    <a
      aria-label="Link to open resume"
      class="about-me__link"
      rel="noopener noreferrer"
      :href="resumeLink"
      target="_blank"
    >
      Resume <ArrowUpperRightSvg />
    </a>
    <p class="about-me__paragraph">
      Also I am a passionate blog writer. You can find my blog articles on this
      page or on medium.
    </p>
    <p class="about-me__paragraph">
      I have more than 100.000 views on my articles and more than 5000 claps. You
      can check the articles on medium here:
    </p>
    <a
      aria-label="Link to open medium profile page"
      class="about-me__link"
      rel="noopener noreferrer"
      :href="mediumProfileLink"
      target="_blank"
    >
      Medium <ArrowUpperRightSvg />
    </a>
    <h2 class="about-me__heading--second">Technologies I use</h2>
    <TechnologiesList />
  </div>
</template>

<script>
import ArrowUpperRightSvg from './ArrowUpperRight';
import VueInlineSvg from './technology-icons/VueInline';
import TechnologiesList from './TechnologiesList';

export default {
  name: 'TheAboutMeContent',
  components: {
    ArrowUpperRightSvg,
    VueInlineSvg,
    TechnologiesList,
  },
  props: {
    resumeLink: String,
    mediumProfileLink: String,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins.scss';

$text-grey: #706f6f;
$text-blue: #4096c4;

.about-me {
  &__heading {
    &--first {
      color: $text-grey;
      font-size: 1.5625em;
      font-weight: 300;
      margin-top: 0.75em;
      margin-bottom: 0.75em;
    }

    &--second {
      color: $text-grey;
      font-size: 1.3em;
      font-weight: 300;
      line-height: 1.5625em;
      margin-bottom: 0.5em;
    }
  }

  &__link {
    @include no-text-decoration();

    color: $text-blue;
    font-size: 1.125em;
    line-height: (7 / 3) + 0em;
    padding-left: (1 / 3) + 0em;
  }

  &__content {
    padding-left: 1.5625em;
    padding-right: 1.5625em;
  }

  &__paragraph {
    color: $text-grey;
    font-size: 1em;
    font-weight: 300;
    line-height: 1.5625em;
  }
}
</style>
