import gulp from 'gulp'
import runSequence from 'run-sequence'

const TASK_NAME = 'build'

function build (callback) {
  const conf = gulp.config(['tasks', TASK_NAME])
  runSequence(conf.taskQueue, conf.afterTasks, callback)
}

gulp.task(TASK_NAME, build)

export default build
