module.exports = {
  /*
  ** Build configuration
  */
  build: {},
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    'name': 'Web Dev Stories',
    'short_name': 'WDS',
    'theme_color': '#4096c4',
    'start_url': '.',
    'display': 'standalone',
    'background_color': '#fff',
    'description': 'A simply readable Hacker News app.',
    'related_applications': [{
      'platform': 'web'
    }]
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit'
  ],
  css: [
    '~assets/css/pure-min.css',
    '~assets/css/grids-responsive-min.css',
    '~assets/css/lato.css',
    '~assets/css/highlight-js.css'
  ],
  plugins: [],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-container',
      'markdown-it-attrs'
    ]
  }
}
