const path = require('path');
let VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development', // production development
  entry: {
    tree: './src/index.js' // 入口文件
  },
  output: {
    path: path.resolve(__dirname, './dist'), // 输出目录
    filename: 'index.js', // 输出文件名
    library: 'vue-replay', // 指定的就是你使用require时的模块名
    libraryTarget: 'umd', // 支持cmd，amd，及全局 具体啥意思也没明白 libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
    umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseInlineTagWhitespace: true,
      },
      hash: true
    }),
    new VueLoaderPlugin()// 这里遇到坑了，不加 vue-load报错
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }

}