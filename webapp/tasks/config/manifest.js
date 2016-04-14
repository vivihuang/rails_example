import gulp from 'gulp'

export default {
  manifestFile: `${gulp.config('base.dist')}/manifest.json`,
  templates: `${gulp.config('templates')}`,
  baseFile: `${gulp.config('templates')}` + '/base.hbs',
  distFile: 'base.html',
  devMode: {
    '/public/bundle.js': '/public/bundle.js',
    '/public/vendor.js': '/public/vendor.js'
  }
}