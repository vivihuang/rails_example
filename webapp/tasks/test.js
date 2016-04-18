import gulp from 'gulp'
import path from 'path'
import mocha from 'gulp-mocha'
import { Instrumenter } from 'isparta';
import istanbul from 'gulp-istanbul'

const TASK_NAME = 'test'

function preTest (fileConf) {
  return gulp.src(fileConf.src, {read: false})
    .pipe(istanbul({instrumenter: Instrumenter}))
    .pipe(istanbul.hookRequire())
}

function testOnce (fileConf) {
  process.env.NODE_PATH = path.join(process.cwd(), gulp.config('base.src'))
  preTest(fileConf)
  return gulp.src(fileConf.src)
    .pipe(mocha())
    .pipe(istanbul.writeReports())
}

function test () {
  return gulp.autoRegister(TASK_NAME, testOnce)
}

gulp.task(TASK_NAME, test)

export default test
