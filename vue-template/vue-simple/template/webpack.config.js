const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

const prodPlugins = [
  new MiniCssExtractPlugin({
    filename: "css/[name].[hash].css",
    chunkFilename: "[id].css",
  }),
  new VueLoaderPlugin({
    publicPath: "../"
  }),
  new HtmlWebpackPlugin({ template: "./index.html" }),
]


if (!devMode) {
  prodPlugins.unshift(new CleanWebpackPlugin())
}

module.exports = {
  entry: {
    'main': './src/main.js',
    'test': './src/test.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: __dirname + '/dist',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.json', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.(le)|(c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single', // 共享运行时文件
  },
  plugins: prodPlugins
};
