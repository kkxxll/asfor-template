const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: {
    'main': './src/main.js',
    'test': './src/test.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      // {
      //   test: /\.css$/,
      //   use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader'] // 从右向左解析原则

      // },
      // {
      //   test: /\.less$/,
      //   use: ['style-loader', 'css-loader', 'less-loader'] // 从右向左解析原则
      // }
      {
        test: /\.(le|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          // "postcss-loader",
          "less-loader",
        ],
      },
    ],
  },
  devServer: {
    static: './dist',
  },
  optimization: {
    runtimeChunk: 'single', // 共享运行时文件
  },
  output: {
    filename: '[name].[contenthash].js',
    // path: path.resolve(__dirname, "dist"),
    path: __dirname + '/dist',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].css",
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: "./index.html" }),
  ],
};
