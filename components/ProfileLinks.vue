<template>
  <div>
    <div>
      <a :href="socialMedia.twitter" target="_blank" rel="noopener noreferrer">
        <twitter-svg></twitter-svg>
      </a>
      <a :href="socialMedia.email" target="_blank" rel="noopener noreferrer">
        <email-svg></email-svg>
      </a>
    </div>
    <div>
      <a :href="socialMedia.linkedin" target="_blank" rel="noopener noreferrer">
        <linkedin-svg></linkedin-svg>
      </a>
      <a :href="socialMedia.xing" target="_blank" rel="noopener noreferrer">
        <xing-svg></xing-svg>
      </a>
    </div>
    <div>
      <a :href="socialMedia.medium" target="_blank" rel="noopener noreferrer">
        <medium-svg></medium-svg>
      </a>
    </div>
  </div>
</template>

<script>
import EmailSvg from './general-icons/Email';
import LinkedinSvg from './general-icons/Linkedin';
import MediumSvg from './general-icons/Medium';
import TwitterSvg from './general-icons/Twitter';
import XingSvg from './general-icons/Xing';

export default {
  name: 'profile-links',
  components: {
    EmailSvg,
    LinkedinSvg,
    MediumSvg,
    TwitterSvg,
    XingSvg,
  },
  props: {
    socialMedia: Object,
  },
};
</script>

<style lang="scss" scoped>

</style>
