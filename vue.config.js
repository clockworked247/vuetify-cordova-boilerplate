const path = require('path')
module.exports = {
  lintOnSave: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/scss/global.scss')]
    }
  }
  // outputDir: '',
  // publicPath: './'
}
