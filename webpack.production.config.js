var path = require('path')
var webpack = require('webpack')

var config = {
  entry: {
    main: [
       path.resolve(__dirname, 'src/main.js')
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: 'public/assets',
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel'
      },
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader' 
      }
    ]
  }
}

module.exports = config