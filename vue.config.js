module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.externals({
      vue: 'Vue'
    })
  },
  publicPath: './'
}
