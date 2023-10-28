const path = require('path')

/*
  这里 src下的js 代码不会被打包，最终只会打包css到页面上
*/
module.exports = {
  mode: 'none',
  entry: './src/main.css',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /.css$/,
        // loader 从后往前执行
        // css loader 转化css
        // style loader 将css 转化为style 标签放在页面上
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
