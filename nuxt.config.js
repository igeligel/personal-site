module.exports = {
  /*
  ** Build configuration
  */
  build: {},
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google', content: 'notranslate' },
      { name: 'google-site-verification', content: 't15rKEcRCZ457RDQnD7E3FBI05TfLjzKINO6QhcPbiY' },
      { name: 'referrer', content: 'no-referrer' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'ICBM', content: '52.52, 13.4050' },
      { name: 'geo.position', content: '52.52;13.4050' },
      { name: 'geo.region', content: 'DE-BE' },
      { name: 'geo.placename', content: 'Berlin' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#a1c4fd' },
      { name: 'apple-mobile-web-app-title', content: 'Web Dev Stories' },
      { name: 'theme-color', content: '#a1c4fd' },
      { name: 'application-name', content: 'Web Dev Stories' },
      { name: 'msapplication-tooltip', content: 'Web development stories by a .NET and Vue.js enthusiast.' },
      { name: 'msapplication-starturl', content: '/' },
      { name: 'msapplication-navbutton-color', content: '#ffffff' },
      { name: 'msapplication-TileColor', content: '#a1c4fd' },
      { name: 'renderer', content: 'webkit|ie-comp|ie-stand' },
      { name: 'x5-orientation', content: 'portrait' },
      { name: 'x5-fullscreen', content: 'true' },
      { name: 'x5-page-mode', content: 'app' },
      { name: 'screen-orientation', content: 'portrait' },
      { name: 'full-screen', content: 'yes' },
      { name: 'browsermode', content: 'application' },
      { name: 'layoutmode', content: 'fitscreen' },
      { name: 'wap-font-scale', content: 'no' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#a1c4fd' },
  /*
  ** Customize app manifest
  */
  manifest: {
    name: 'Web Dev Stories',
    short_name: 'WDS',
    theme_color: '#4096c4',
    start_url: '.',
    display: 'standalone',
    background_color: '#fff',
    description: 'Homepage of the web developer Kevin Peters.',
    related_applications: [{
      platform: 'web',
    }],
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
    ['@nuxtjs/google-analytics', { ua: 'UA-104059616-1' }],
    ['@nuxtjs/sitemap', {
      path: '/sitemap.xml',
      hostname: 'https://www.kevinpeters.net',
      generate: true,
      routes: [
        {
          url: '/',
          changefreq: 'weekly',
          priority: 1,
          lastmodISO: '2017-08-05T19:30:00.000Z',
        }, {
          url: '/blog',
          changefreq: 'weekly',
          priority: 0.8,
          lastmodISO: '2017-08-05T19:30:00.000Z',
        }, {
          url: '/projects',
          changefreq: 'monthly',
          priority: 0.2,
          lastmodISO: '2017-08-05T19:30:00.000Z',
        }, {
          url: '/about',
          changefreq: 'yearly',
          priority: 0.4,
          lastmodISO: '2017-08-05T19:30:00.000Z',
        }, {
          url: '/blog/writing-a-progressive-image-loading-component',
          changefreq: 'never',
          priority: 0.7,
          lastmodISO: '2017-08-05T19:30:00.000Z',
        }, {
          url: '/blog/my-visual-studio-code-setup-part-one',
          changefreq: 'never',
          priority: 0.7,
          lastmodISO: '2017-08-05T19:30:00.000Z',
        }, {
          url: '/blog/jquery-selector-performance',
          changefreq: 'never',
          priority: 0.7,
          lastmodISO: '2017-08-05T19:30:00.000Z',
        },
      ],
    }],
  ],
  css: [
    '~assets/css/pure-min.css',
    '~assets/css/grids-responsive-min.css',
    '~assets/css/lato.css',
    '~assets/css/highlight-js.css',
  ],
  plugins: [],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-container',
      'markdown-it-attrs',
    ],
  },
};
