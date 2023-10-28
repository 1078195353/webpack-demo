const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'js/bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    hot: true // 如果热替换失败，会刷新页面，导致错误信息丢失
    // hotOnly: true // 只使用 HMR，不会 fallback 到 live reloading，可以报错错误信息
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Tutorial',
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
