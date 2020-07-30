// Vue.config.js 配置选项
const webpack = require('webpack')
module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'
  // ? './'
  // : '/',
  publicPath: "./",
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })

    ]

  },
  chainWebpack(config) {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [{
      rel: 'preload',
      // to ignore runtime.js
      // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
      fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
      include: 'initial'
    }])
    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')
    // 其他配置
    // config.entry('main').add('babel-polyfill') // main是入口js文件
    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                }
              }
            })
          // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
          config.optimization.runtimeChunk('single')
        }
      )
  }
  // 配置 webpack-dev-server 行为。
  // devServer: {
  //   open: process.platform === 'darwin',
  //   host: '0.0.0.0',
  //   port: 8080,
  //   https: false,
  //   hotOnly: false,
  //   // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
  //   proxy: {
  //     '/api': {
  //       target: "http://qywx.hhgs.org.cn:9096", //正式环境测试版本
  //       // target: "http://192.168.2.228:1102", //luzongyu
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/api": "/"
  //       }
  //     }
  //   }, // string | Object
  //   before: app => {}
  // }
}