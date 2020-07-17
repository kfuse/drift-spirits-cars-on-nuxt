export default {
  srcDir: 'src/',
  build: {
    extractCSS: true
  },
  css: [
    '@/assets/css/common.css'
  ],
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no' }
    ]
  },
  plugins: [
    '~/plugins/slide-up-down'
  ]
}
