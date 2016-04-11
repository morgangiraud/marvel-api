var path = require('path')
var webpack = require('webpack')

var config = {
  devtool: 'eval-source-map',
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server', 
       path.resolve(__dirname, 'src/main.js')
    ]
  },
  output: {
    comment: 'publicPath is used for assets(async) loaded files and path for the needed direct srcs',
    path: path.join(__dirname, 'public'),
    publicPath: 'public',
    filename: '[name].dev.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    })
  ],
  module: {
    loaders: [
      {
        comment: 'loaders are applied from right to left',
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'react-hot!babel'
      }
    ]
  }
}

module.exports = config