import 'babel-register'
import gulp from 'gulp'
import path from 'path'
import requireDir from 'require-dir'
import gulpTaskConfig from './tasks/libs/gulp-task-config'

gulpTaskConfig(gulp)

requireDir(path.join(__dirname, 'tasks'))

gulp.config('base.root', __dirname)
gulp.config('base.src', path.join(__dirname, 'src'))
gulp.config('base.test', path.join(__dirname, 'test'))
gulp.config('templates', '../public')
gulp.config('base.dist', '../public/assets')

gulp.config('tasks', requireDir(path.join(__dirname, 'tasks', 'config')))

gulp.config('tasks.build', {
  taskQueue: [
    'clean',
    'copy',
    'sass',
    'lint',
    'webpack'
  ],
  afterTasks: ['manifest']
})

gulp.task('dev', () => {
  gulp.config(gulp.DEV_MODE, true)
  gulp.start(['build'])
})

gulp.task('default', ['build'])
