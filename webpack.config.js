var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './src/client',
  },
  output: {
    path: path.join(__dirname, 'public/js/'),
    filename: '[name].js',
    publicPath: '/js/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(`production`)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: false
      }
    }),
    new webpack.optimize.DedupePlugin()
  ],
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  resolve: {
    extensions: ['', '.js', '.json', '.cjsx', '.coffee']
  },
  module: {
    loaders: [
      {
        test: /\.coffee$/,
        loaders: ['coffee', 'cjsx'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};
