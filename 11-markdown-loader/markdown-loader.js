const marked = require('marked')

module.exports = source => {
  /*  
    soucre 是fs 读取的文件 字符串
  */
  // 1. 必须放回 js 代码字符串
  // console.log(source)

  // 1.1 正确
  // return 'console.log("hello ~")'


  const html = marked(source)
  // 2. 直接返回 html 字符串，报错。不是 js 代码字符串
  // return html

  // 4. 将 html 转化为 js 代码
  // return `export default ${JSON.stringify(html)}`

  // 返回 html 字符串交给下一个 loader 处理, 需要 html-loader
  return html
}
