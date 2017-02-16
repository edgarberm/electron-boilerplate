var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

/*
 * General config
 */
var config = {
  entry: {
    'js/app.js': './app/app.js',
    'css/main.css': './app/scss/main.scss',
  },
  output: {
    path: __dirname + '/public',
    filename: '[name]',
  },
  devServer: {
    hot: true,
    inline: false,
    historyApiFallback: true,
    contentBase: __dirname + '/public',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-1', 'react'],
            plugins: ['transform-decorators-legacy']
          },
        }],
      },
      {
        test: /\.css$/,  // NOTE: se necesita realmente?
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: "css-loader!sass-loader",
        }),
      }
    ],
  },
}

/*
 * Bundling for production
 */
if (process.env.NODE_ENV !== 'production') {
  config.devtool = 'true'
  config.plugins = [
    new ExtractTextPlugin({
      filename: 'css/main.css',
      disable: false,
      allChunks: true,
    }),
  ]
} else {
  config.devtool = 'false'
  config.plugins = [
    new ExtractTextPlugin({
      filename: 'css/main.css',
      disable: false,
      allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        unused: true,
        drop_console: true
      },
      output: {
        comments: false
      }
    }),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') }})
  ]
}

module.exports = config
