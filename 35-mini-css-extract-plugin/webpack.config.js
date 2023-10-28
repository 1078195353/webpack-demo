const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js'
  },
  optimization: {
    /*
    放在 minimizer 当中 可以只在 开启了 minimizer（生产模式默认开启）
    其他情况 插件不会运行。
    但是，minimizer 被定义，webpack认为压缩工具都在该数组当中取，原有的js压缩工具失效
    需要重新添加回来
    */
    minimizer: [
      new TerserWebpackPlugin(),
      new OptimizeCssAssetsWebpackPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader', // 将样式通过 style 标签注入
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Dynamic import',
      template: './src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin()
  ]
}
