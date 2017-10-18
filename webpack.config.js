const path = require('path');
const {name} = require('./package');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const ESLintFriendlyFormatter = require('eslint-friendly-formatter');
const resolvePath = basePath => path.resolve(__dirname, basePath);
const layoutPackage = process.env.LAYOUT || 'vue-material';

return module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: resolvePath('build'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      $layout$: layoutPackage,
      $layout: resolvePath(`src/layout/${layoutPackage}`),
      vue$: 'vue/dist/vue.esm.js',
      lib: resolvePath('lib')
    }
  },
  module: {
    rules: [
      { test: /\.html/,  use: ['html-loader'] },
      { test: /\.css$/,  use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolvePath('src'), resolvePath('lib')],
        options: {
          formatter: ESLintFriendlyFormatter
        }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      title: name,
      template: HtmlWebpackTemplate,
      inject: false,
      links: [
        '//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic',
        '//fonts.googleapis.com/icon?family=Material+Icons'
      ],
      appMountId: 'app'
    }),
    new StyleLintPlugin({
      configFile: resolvePath('config/stylelint.config.yaml'),
      files: ['src/**/*.s?(a|c)ss']
    }),
  ],
  devServer: {
    contentBase: './build',
    port: 25489 //BLITZ on numpad
  }
};