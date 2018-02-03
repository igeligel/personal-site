<template>
  <div class="about-me__container">
    <div class="pure-g">
      <div class="pure-u-1-2">
        <img
          class="about-me__profile-image"
          src="~assets/img/profile-border-radius.png"
          alt="image of kevin peters"
        />
      </div>
      <div class="pure-u-1-2">
        <ProfileLinks :socialMediaList="socialMedia" />
      </div>
    </div>
    <div class="about-me__content">
      <h1 class="about-me__heading--first">About me</h1>
      <p class="about-me__paragraph">
        Hey there, I’m Kevin! I am a web developer living in Berlin. I love
        crafting stuff in the web and am really deep into <VueInlineSvg /> and
        .NET
      </p>
      <p class="about-me__paragraph">You can find my resume on the following link:</p>
      <a
        aria-label="Link to open resume"
        class="about-me__link"
        rel="noopener noreferrer"
        :href="resume"
        target="_blank"
      >
        Resume <ArrowUpperRightSvg />
      </a>
      <p class="about-me__paragraph">
        Also I am a passionate blog writer. You can find my blog articles on
        this page or on medium.
      </p>
      <p class="about-me__paragraph">
        I have more than 20.000 views on my articles and more than 2000 claps.
        You can check the articles on medium here:
      </p>
      <a
        aria-label="Link to open medium profile page"
        class="about-me__link"
        rel="noopener noreferrer"
        :href="mediumProfile"
        target="_blank"
      >
        Medium <ArrowUpperRightSvg />
      </a>
      <h2 class="about-me__heading--second">Technologies I use</h2>
      <TechnologiesList />
    </div>
  </div>
</template>

<script>
import ArrowUpperRightSvg from '~/components/ArrowUpperRight';
import VueInlineSvg from '~/components/technology-icons/VueInline';

import ProfileLinks from '~/components/ProfileLinks';
import TechnologiesList from '~/components/TechnologiesList';
import AboutHead from './AboutHead';

export default {
  head: AboutHead,
  components: {
    ArrowUpperRightSvg,
    VueInlineSvg,
    ProfileLinks,
    TechnologiesList,
  },
  data() {
    return {
      online: true,
      socialMedia: [
        {
          key: 'twitter',
          ariaLabel: 'Link to Twitter',
          url: 'https://twitter.com/kevinpeters_',
        },
        {
          key: 'email',
          ariaLabel: 'Link to open email dialog',
          url: 'mailto:kevinpeterscareer@gmail.com',
        },
        {
          key: 'linkedin',
          ariaLabel: 'Link to open linked in',
          url: 'https://www.linkedin.com/in/kevinpetersde',
        },
        {
          key: 'xing',
          ariaLabel: 'Link to open xing',
          url: 'https://www.xing.com/profile/Kevin_Peters32',
        },
        {
          key: 'medium',
          ariaLabel: 'Link to open medium',
          url: 'https://medium.com/@kevin_peters',
        },
        {
          key: 'github',
          ariaLabel: 'Link to open github profile',
          url: 'https://github.com/igeligel',
        },
      ],
      resume:
        'https://drive.google.com/file/d/0B5bsFD4wxCdmczVJQnFLWXAwNEU/view?usp=sharing',
      mediumProfile: 'https://medium.com/@kevin_peters',
    };
  },
  mounted() {
    if (!window.navigator) {
      this.online = false;
      return;
    }
    this.online = Boolean(window.navigator.onLine);
    window.addEventListener('offline', this._toggleNetworkStatus);
    window.addEventListener('online', this._toggleNetworkStatus);
  },
  destroyed() {
    window.removeEventListener('offline', this._toggleNetworkStatus);
    window.removeEventListener('online', this._toggleNetworkStatus);
  },
  methods: {
    _toggleNetworkStatus({ type }) {
      this.online = type === 'online';
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/mixins.scss';

$text-grey: #706f6f;
$text-blue: #4096c4;

.about-me {
  &__container {
    font-family: 'Lato', sans-serif;
    max-width: 1000px;
    margin: auto;
    padding-bottom: 65px;
    text-rendering: optimizeLegibility;
  }

  &__profile-image {
    float: right;
  }

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
