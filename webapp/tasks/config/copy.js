import gulp from 'gulp'

export default {
  files: [
    {
      src: [
        `${gulp.config('base.src')}/assets/**/*.*`
      ],
      dest: `${gulp.config('base.dist')}/assets`
    }
  ]
}
