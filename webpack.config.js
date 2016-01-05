var webpack = require('webpack');
var path = require('path');
var prod = process.env.prod;
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var head = new CommonsChunkPlugin({name: 'head', filename: 'head.js', minChunks: Infinity});
var common = new CommonsChunkPlugin({name: 'common', filename: 'common.js', minChunks: 2, chunks: ['app']});
var hmr = new webpack.HotModuleReplacementPlugin();
var plugins = [];
plugins.push(head, common, hmr);
if (prod) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: true,
    output: {
      comments: false
    }
  }));
  dest = path.join(__dirname, 'dist');
}
else {
  dest = path.join(__dirname, '.tmp');
}

module.exports = {
  debug: true,
  context: __dirname,
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: 9000,
    contentBase: './'
  },
  entry: {
    app: [
      './app/app.js'
    ],
    head: './app/head.js'
  },
  output: {
    path: dest,
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    root: './',
    extensions: ['', '.ts', '.tsx', '.js', '.json', '.html']
  },
  module: {
    preLoaders: [{test: /\.ts$/, loader: 'tslint-loader'}],
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: [
          /\.min\.js$/,
          /\.spec\.ts$/,
          /\.e2e\.ts$/,
          /typings/
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg|jpeg|jpg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test:/\.mp4$/,
        loader: 'file-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
       test: /\.less$/,
       loader: 'style!css!less'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ],
    noParse: [
      /angular2-polyfills\.js/g,
      /js\.map'/g,
      /angular2\.dev\.js/g
    ]
  },
  node: {
    fs: 'empty'
  },
  plugins: plugins,
  tslint: {
    emitErrors: false,
    failOnHint: false
  }
};

//Setup build
if (prod) {
  var err = function (err) {
    if (err) throw console.error(err);
  };
  var fs = require('fs-extra');
  var minify = require('html-minifier').minify;

  fs.emptyDir('./dist', function (err) {
    if (err) throw console.error(err);
    fs.readFile('./index.html', 'utf8', function (err, data) {
      if (err) throw console.error(err);
      var result = minify(data, {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeOptionalTags: true
      });
      fs.writeFile('./dist/index.html', result, err);
    });
  });
}
