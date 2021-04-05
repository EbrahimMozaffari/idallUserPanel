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
  // devServer: {
  //   proxy: 'https://userpanelmock.idall.pro/users'
  // },
  // هنگام آدرس دهی در اکسیوس آدرس لوکال را میدهیم ،در ادامه نیز میتوانیم آدری بیس اکسیوس را نیز عوض کنیم...
 publicPath: process.env.NODE_ENV === 'production'
      ? '/idallUserPanel/'
      : '/'
  
}

