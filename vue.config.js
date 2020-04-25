module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.externals({
      vue: 'Vue'
    })
  },
  publicPath:
    'https://cdn.jsdelivr.net/gh/xianshenglu/xianshenglu.github.io/dist/',
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
