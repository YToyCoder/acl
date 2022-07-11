const path =require('path')

module.exports = {
  pluginOptions: {
    electronBuilder: {
      preload: 'src/bridge/preload.ts'
    },
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },

  chainWebpack: config => {
    /* config.module */
    /*   .rule('vue') */
    /*   .use('vue-loader') */
    /*   .loader('vue-loader') */
    /*   .tap(options => { */
    /*     return options */
    /*   }) */
    config.module.rule('svg')
    .exclude.add(path.resolve('src/icons/svg'))
    .end()

    config.module
    .rule('icons')
    .test(/\.svg$/)
    .include.add(path.resolve('src/icons/svg'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({symbolId: 'icon-[name]'})
    .end()
  },

  transpileDependencies: [
    'quasar'
  ]
}
