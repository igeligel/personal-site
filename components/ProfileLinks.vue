<template>
  <div>
    <div v-for="row in splicedArray" :key="row[0].key">
      <a
        v-for="{ key, ariaLabel, url, component } in row"
        :key="key"
        :aria-label="ariaLabel"
        :href="url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <component :is="component" />
      </a>
    </div>
  </div>
</template>

<script>
import EmailSvg from '~/components/general-icons/Email';
import LinkedinSvg from '~/components/general-icons/Linkedin';
import MediumSvg from '~/components/general-icons/Medium';
import TwitterSvg from '~/components/general-icons/Twitter';
import XingSvg from '~/components/general-icons/Xing';
import GitHubSvg from '~/components/general-icons/GitHub';

export default {
  name: 'ProfileLinks',
  components: {
    EmailSvg,
    LinkedinSvg,
    MediumSvg,
    TwitterSvg,
    XingSvg,
    GitHubSvg,
  },
  props: {
    socialMediaList: Array,
  },
  data() {
    return {
      keyComponentDictionary: {
        twitter: 'TwitterSvg',
        email: 'EmailSvg',
        linkedin: 'LinkedinSvg',
        xing: 'XingSvg',
        medium: 'MediumSvg',
        github: 'GitHubSvg',
      },
    };
  },
  computed: {
    splicedArray() {
      const array = this.socialMediaListIncludingComponents;
      let chunks = [];
      while (array.length > 0) {
        chunks.push(array.splice(0, 2));
      }
      return chunks;
    },
    socialMediaListIncludingComponents() {
      return this.socialMediaList.map((socialMediaListElement) => ({
        ...socialMediaListElement,
        component: this.keyComponentDictionary[socialMediaListElement.key],
      }));
    },
  },
};
</script>
