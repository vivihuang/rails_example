import gulp from 'gulp'

export default {
  src: [
    `${gulp.config('base.test')}/**/*.spec.js{,x}`
  ]
}
