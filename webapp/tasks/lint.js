import gulp from 'gulp'
import gutil from 'gulp-util'
import eslint from 'gulp-eslint'

const TASK_NAME = 'lint'

function lintOnce (fileConf) {
  return gulp.src(fileConf.src)
    .pipe(eslint(fileConf.options))
    .pipe(eslint.formatEach('compact', process.stderr))
    .pipe(process.env.NODE_ENV === 'production' ? eslint.failOnError() : gutil.noop())
}

function lintWatch (targetFile, config) {
  return gulp.src(config.src)
    .pipe(eslint(config.options))
    .pipe(eslint.formatEach('compact', process.stderr))
    .pipe(gutil.noop())
}

function lint () {
  return gulp.autoRegister(TASK_NAME, lintOnce, config => {
    gulp.watch(config.src, evt => {
      gutil.log(evt.type, evt.path)
      lintWatch(evt.path, config)
    })
  })
}

gulp.task(TASK_NAME, lint)

export default lint
