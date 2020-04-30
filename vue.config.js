module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.externals({
      vue: 'Vue'
    })
  },
  publicPath: './',
  pwa: {
    themeColor: '#4DBA87',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './public/service-worker.js'
    },
    manifestOptions: {
      background_color: '#ffffff'
    }
  }
}
