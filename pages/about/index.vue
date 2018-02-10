<template>
  <div class="about-me__container">
    <div class="pure-g">
      <div class="pure-u-1-2">
        <ProfilePicture :name="'Kevin Peters'" :image="profilePicture" />
      </div>
      <div class="pure-u-1-2">
        <ProfileLinks :socialMediaList="socialMedia" />
      </div>
    </div>
    <TheAboutMeContent
      :resumeLink="resumeLink"
      :mediumProfileLink="mediumProfileLink"
    />
  </div>
</template>

<script>
import ProfilePicture from '~/components/ProfilePicture';
import ProfileLinks from '~/components/ProfileLinks';
import TheAboutMeContent from '~/components/TheAboutMeContent';

import AboutHead from './AboutHead';
import SocialMediaProfiles from '../../content/SocialMediaProfiles';
import ProfilePictureRaw from '~/assets/img/profile-border-radius.png';

export default {
  head: AboutHead,
  components: {
    ProfilePicture,
    ProfileLinks,
    TheAboutMeContent,
  },
  data() {
    return {
      online: true,
      socialMedia: SocialMediaProfiles,
      resumeLink:
        'https://drive.google.com/open?id=1vlNzCOvAkwDdlLsUO6ROuTex87k2kW1i',
      mediumProfileLink: 'https://medium.com/@kevin_peters',
      profilePicture: ProfilePictureRaw,
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
.about-me__container {
  font-family: 'Lato', sans-serif;
  max-width: 1000px;
  margin: auto;
  padding-bottom: 65px;
  text-rendering: optimizeLegibility;
}
</style>
