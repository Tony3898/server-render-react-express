const {resolve} = require('path');

module.exports = {
  mode: "development",
  entry: resolve(__dirname, 'ui', 'components'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: "main.js",
    publicPath: "/"
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
}
