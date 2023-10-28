const path = require('path')
/*
配置入口和出口
  默认为 
  入口：src/index.js
  出口：dist/main.js
*/
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'output')
  }
}
