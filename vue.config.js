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
    msTileColor: '#fff',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './public/service-worker.js'
    }
  }
}
