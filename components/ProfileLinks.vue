<template>
  <div>
    <div>
      <a aria-label="Link to Twitter" :href="socialMedia.twitter" target="_blank" rel="noopener noreferrer">
        <twitter-svg></twitter-svg>
      </a>
      <a aria-label="Link to open email dialog" :href="socialMedia.email" target="_blank" rel="noopener noreferrer">
        <email-svg></email-svg>
      </a>
    </div>
    <div>
      <a aria-label="Link to open linkedin" :href="socialMedia.linkedin" target="_blank" rel="noopener noreferrer">
        <linkedin-svg></linkedin-svg>
      </a>
      <a aria-label="Link to open xing" :href="socialMedia.xing" target="_blank" rel="noopener noreferrer">
        <xing-svg></xing-svg>
      </a>
    </div>
    <div>
      <a aria-label="Link to open medium" :href="socialMedia.medium" target="_blank" rel="noopener noreferrer">
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
  name: 'ProfileLinks',
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
