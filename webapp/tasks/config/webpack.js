import gulp from 'gulp'
import webpack from 'webpack'
import ManifestPlugin from 'webpack-manifest-plugin'
var node_modules_dir = `${gulp.config('base.root')}/node_modules`
var vendorFile = process.env.NODE_ENV === 'production' ? "[hash].vendor.js" : 'vendor.js'
var bundleFile = process.env.NODE_ENV === 'production' ? "[hash].bundle.js" : 'bundle.js'

export default {
  files: [
    {
      src: `${gulp.config('base.src')}/**/*.js`,
      dest: `${gulp.config('base.dist')}`
    }
  ],
  options: {
    cache: true,
    devtool: process.env.NODE_ENV === 'production' ? null : 'source-map',
    entry: {
      js: `${gulp.config('base.src')}/index.js`,
      vendor: ['react']
    },
    output: {
      publicPath: "/public/",
      filename: bundleFile
    },
    module: {
      loaders: [
        { test: /\.html$/, loader: 'file?name=[name].[ext]' },
        { test: /\.(css|scss)$/, include: /src/, loader: "style-loader!css-loader?&modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!sass-loader" },
        { test: /\.(css|scss)$/, exclude: /src/, loader: "style-loader!css-loader!sass-loader" },
        { test: /\.(png|jpg)$/, loaders: "file?name=[path][name].[ext]" },
        { test: /\.woff(\?.*)?$/, loader: "url-loader?prefix=font/&name=[path][name].[ext]&limit=5000&mimetype=application/font-woff" },
        { test: /\.woff2(\?.*)?$/, loader: "url-loader?prefix=font/&name=[path][name].[ext]&limit=5000&mimetype=application/font-woff2" },
        { test: /\.ttf(\?.*)?$/, loader: "file-loader?prefix=font/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream" },
        { test: /\.eot(\?.*)?$/, loader: "file-loader?prefix=font/&name=[path][name].[ext]" },
        { test: /\.svg(\?.*)?$/, loader: "file-loader?prefix=font/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml" },
        { test: /\.js(\?.*)?$/, exclude: [node_modules_dir], loader: "react-hot!babel-loader" }
      ]
    },
    resolve: {
      alias: { },
      modulesDirectories: ['node_modules']
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: vendorFile,
          minChunks: (module, count) => {
            return module.resource && module.resource.indexOf(gulp.config('base.src')) === -1
          }
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new ManifestPlugin({basePath: '/assets/'})
    ]
  }
};
