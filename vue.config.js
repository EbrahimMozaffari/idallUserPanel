module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: {
    //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
    resolve: {
       symlinks: false
    }
  },
  transpileDependencies: [
    '@coreui/utils',
    '@coreui/vue',
    'vuetify'
  ],
  devServer: {
    host: 'myaccount.idall.pro',
    port:443,
    https:true,
    disableHostCheck:true
  }
}

