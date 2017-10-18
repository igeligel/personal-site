import JquerySelectorPerformance from '~/assets/img/jquery-selector-performance.png';
import MyVisualStudioCodeSetupImage from '~/assets/img/my-visual-studio-code-setup.png';
import WritingAProgressiveImageLoadingComponentImage from '~/assets/img/writing-a-progressive-image-loading-component-in-vue.js.png';
import UnitTestingVueJsComponentsWithJest from '~/assets/img/unit-testing-vue-js-components-with-jest.png';

const blogposts = [
  {
    title: 'Unit testing Vue.js components with Jest',
    description: 'Article to show how to setup Jest in an Vue.js application. This will guide you through everything in a blank Vue.js template to test components and more.',
    url: '/blog/unit-testing-vue-js-components-with-jest',
    previewImage: UnitTestingVueJsComponentsWithJest,
    altTag: 'Vue.js and Jest logo on some generic paper background',
  },
  {
    title: 'jQuery Selector Performance',
    description: 'Are jQuery selectors a good idea and how can we improve performance. A good guide on how to reduce loading times inside of big JavaScript applications. With the help of the Chrome developer tools (dev tools) we will analyse on how to optimize jQuery selectors.',
    url: '/blog/jquery-selector-performance',
    previewImage: JquerySelectorPerformance,
    altTag: 'image showing a laptop',
  }, {
    title: 'My Visual Studio Code setup',
    description: 'A blogpost about Visual Studio Code, the installation of the editor and the basic setup of the plugin settings sync.',
    url: '/blog/my-visual-studio-code-setup-part-one',
    previewImage: MyVisualStudioCodeSetupImage,
    altTag: 'image showing a laptop',
  }, {
    title: 'Writing a progressive image loading component in vue.js',
    description: 'We want small load times for images, but when we are on mobile there is not always a good connection so we could use a placeholder or an image reduced in size so it loads faster.',
    url: '/blog/writing-a-progressive-image-loading-component',
    previewImage: WritingAProgressiveImageLoadingComponentImage,
    altTag: 'picture of an island out of birds perspective',
  },
];

export default blogposts;
