import path from 'path'
import _ from 'lodash'
import gulp from 'gulp'
import gutil from 'gulp-util'
import webpack from 'webpack'
import gulpWebpack from 'webpack-stream'
import changed from 'gulp-changed'

const TASK_NAME = 'webpack'

function whenInProductionDoUglify (config) {
  if (process.env.NODE_ENV === 'production') {
    config.options.plugins = config.options.plugins.concat(
      new webpack.DefinePlugin({
        "process.env": {
          "NODE_ENV": JSON.stringify("production")
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
	  )
  }
  return config
}

function wrapWithPluginError (originalError) {
  let message

  if (typeof originalError === 'string') {
    message = originalError
  } else {
    message = originalError.message.toString()
  }
  if (process.env.NODE_ENV === 'production') {
    throw new Error(message)
  }

  gutil.log(new gutil.PluginError(TASK_NAME, message))
}

function webpackWatch (config) {
  config = whenInProductionDoUglify(config)
  return gulp.src(config.src)
    .on('error', err => { wrapWithPluginError(err) })
    .pipe(gulpWebpack(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(gulp.pipeTimer(TASK_NAME))
}

function webpackOnce (config) {
  config = whenInProductionDoUglify(config)
  return gulp.src(config.src)
    .on('error', err => {
      wrapWithPluginError(err)
      process.exit(1)
    })
    .pipe(changed(config.dest))
    .pipe(gulpWebpack(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(gulp.pipeTimer(TASK_NAME))
}

function webpackTask () {
  return gulp.autoRegister(TASK_NAME, (webpackOnce), config => {
    gulp.watch(config.src, () => {
      webpackWatch(config)
    })
  })
}

gulp.task(TASK_NAME, webpackTask)

export default webpackTask
