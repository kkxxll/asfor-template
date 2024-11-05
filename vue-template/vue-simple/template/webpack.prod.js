const path = require('path')
const webpackConfig = require('./webpack.config.js')
const { merge } = require('webpack-merge')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = merge(webpackConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  plugins: [
    // new CopyPlugin({
    //   patterns: [
    //     { from: './src/assets', to: 'assets' },
    //   ],
    // }),
  ]
});
