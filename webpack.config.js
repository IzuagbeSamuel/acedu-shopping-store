const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
// let htmlPageNames = ['page1', 'page2', 'page3', 'page4'];
// let manyHtmlPlugins = htmlPageNames.map(function (pageName) {
//   return new HtmlWebpackPlugin({
//     template: './src/${pageName}.html',
//     filename: '${pageName}.html',
//     chunks: ['${pageName}'],
//   });
// });

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
  },
  // entry: {
  //   main: './js/scripts.js',
  //   page1: './js'
  // }
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Shop',
      template: './src/index.html',
      inject: 'body',
    }),
    new Dotenv(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(gif|png|jpeg?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
};
