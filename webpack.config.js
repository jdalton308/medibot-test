const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets" : ["env", "react"]
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     // Options similar to the same options in webpackOptions.output
  //     // both options are optional
  //     filename: "[name].css",
  //     chunkFilename: "[id].css"
  //   })
  // ]
};