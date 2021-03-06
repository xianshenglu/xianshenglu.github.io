const serverPushPath = 'server-push'
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  lintOnSave: false,
  css: {
    extract: {
      moduleFilename: module => `${serverPushPath}/css/${module.name}.css`
    }
  },
  chainWebpack: config => {
    config.output.filename(`${serverPushPath}/js/[name].js`)
    if (isDev) {
      return
    }
    config.optimization.splitChunks({
      cacheGroups: {
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // windows 下的路径是 \\node_modules\\
            // linux 下的路径是 /node_modules/，这里的正则兼容两种场景
            const reg = /[\\/]node_modules[\\/]([^/]*?)[\\/]/
            const packageName = module.resource.match(reg)[1]
            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm-${packageName.replace('@', '-')}`
          },
          filename: `${serverPushPath}/js/[name].js`,
          priority: -10,
          chunks: 'initial'
        }
      }
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
