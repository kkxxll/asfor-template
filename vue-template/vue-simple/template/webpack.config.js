const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  entry:{
    'main': './src/main.js',
    'test': './src/test.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader'] // 从右向左解析原则
      },
      {
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader'] // 从右向左解析原则
      }
    ],
  },
  devServer: {
    static: './dist',
  },
  optimization: {
    runtimeChunk: 'single', // 共享运行时文件
  },
  output: {
    filename: '[name].js',
    // path: path.resolve(__dirname, "dist"),
    path: __dirname + '/dist',
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: "./index.html" }),
  ],
};
