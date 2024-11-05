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
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.json', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          devMode ? "vue-style-loader" : {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ],
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      // {
      //   test:/\.js$/,
      //   use:{
      //     loader:'babel-loader',
      //     options:{
      //       presets:['@babel/preset-env']
      //     }
      //   },
      //   exclude:/node_modules/
      // },
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
    path: __dirname + '/dist',
  },
  plugins: prodPlugins
};
