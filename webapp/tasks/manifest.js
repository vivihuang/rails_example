import gulp from 'gulp'
import handlebars from 'gulp-compile-handlebars'
import fs from 'fs'
import rename from 'gulp-rename'

const TASK_NAME = 'manifest'

function manifestReplace (config) {
  var manifestFile = process.env.NODE_ENV === 'production'
    ? JSON.parse(fs.readFileSync(config.manifestFile, 'utf8'))
    : config.devMode

  var handlebarOpts = {
    helpers: {
      assetPath: function (path, context) { return [context.data.root[path]].join('/') }
    }
  }

  return gulp.src(config.baseFile)
        .pipe(handlebars(manifestFile, handlebarOpts))
        .pipe(rename(config.distFile))
        .pipe(gulp.dest(config.templates))
        .pipe(gulp.pipeTimer(TASK_NAME))
}

function manifestTask () {
  return gulp.autoRegister(TASK_NAME, (manifestReplace), config => {
    manifestReplace(config)
  })
}

gulp.task(TASK_NAME, manifestTask)

export default manifestTask

