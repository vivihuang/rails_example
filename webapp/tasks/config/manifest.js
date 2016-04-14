import gulp from 'gulp'

export default {
  manifestFile: `${gulp.config('base.dist')}/manifest.json`,
  templates: `${gulp.config('templates')}`,
  baseFile: `${gulp.config('templates')}` + '/index.hbs',
  distFile: 'index.html',
  devMode: {
    '/assets/bundle.js': '/assets/bundle.js',
    '/assets/vendor.js': '/assets/vendor.js'
  }
}