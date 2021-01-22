const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: '/src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader?name=static/images/[name].[hash].[ext]'
          },
        ],
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public/favicon.ico'),
          to: path.resolve(__dirname, '../build')
        },
        {
          from: path.resolve(__dirname, '../public/manifest.json'),
          to: path.resolve(__dirname, '../build')
        },
        {
          from: path.resolve(__dirname, '../public/robots.txt'),
          to: path.resolve(__dirname, '../build')
        },
        {
          from: path.resolve(__dirname, '../public/logo192.png'),
          to: path.resolve(__dirname, '../build')
        },
        {
          from: path.resolve(__dirname, '../public/logo512.png'),
          to: path.resolve(__dirname, '../build')
        },
      ]
    }),
    new HtmlWebpackPlugin({
      template: '/public/index.html',
      publicPath: '/'
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/style.[hash].css'
    })
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src/'),
      public: path.resolve(__dirname, '../public/')
    },
    extensions: ['.js', '.json', '.png', '.svg']
  }
};
