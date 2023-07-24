const { merge } = require('webpack-merge');
const HtmlWelpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8082,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWelpackPlugin({
      template: './public/index.html'
    })  
  ],
  entry: {
    cart: './src/index.js',
    cartWithContainer: './src/indexWithContainer.js'
  },
  output: {
    filename: '[name].bundle.js',
  }
}

module.exports = merge(commonConfig, devConfig);

