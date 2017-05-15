var HtmlWebpackPlugin = require('html-webpack-plugin')
var glob = require('glob')

var entry = {}
var plugins = []
var pluginsPro = []
glob.sync('./src/view/*').forEach(function (directory) {
  var name = directory.substring(directory.lastIndexOf('/') + 1, directory.length)
  glob.sync(directory + '/*.html').forEach(function(path) {
    // 开发
    plugins.push(new HtmlWebpackPlugin({
      filename: name + '.html',
      template: path,
      inject: true,
      variable: '我是变量', // 可以通过这种方式做页面布局或者引入公共内容块, 页面使用方式  <%= htmlWebpackPlugin.options.variable %>
      chunks: [name]
    }))
    // 生产
    pluginsPro.push(new HtmlWebpackPlugin({
      filename: name + '.html',
      template: path,
      inject: true,
      variable: '我是变量',
      chunks: ['manifest', 'vendor', name],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }))
  })
  glob.sync(directory + '/*.js').forEach(function(path) {
    entry[name] = path
  })
})

module.exports = {entry : entry, plugins: plugins, pluginsPro: pluginsPro}
