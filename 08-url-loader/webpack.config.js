const path = require('path')

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      /*
      url loader 需要file loader。
      超过限制的图片还是需要 file loader处理
      在package.json 当中
      */
      {
        test: /.png$/,
        use: {
          loader: 'url-loader',
          options: {
            // 小于 15 kb的图片才会转化成 base64格式 一般是 10kb
            limit: 15 * 1024 // 15 KB
          }
        }
      }
    ]
  }
}
