var path = require('path')
var HtmlwebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      template: 'src/template.html',
      filename: 'index.html',
      inject: 'body',
      minify:{
         removeComments:true,
         collapseWhitespace:true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
       compress: {
           warnings: false
       },
       except: ['$super', '$', 'exports', 'require']
    }),
    new webpack.DefinePlugin({
           'process.env': {
               'NODE_ENV': '"production"'
           }
       })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
}
