import gulp from 'gulp'

const cssDir = `${gulp.config('base.dist')}/styles`

export default {
  files: [{
    entry: [
      `${gulp.config('base.src')}/**/style.scss`,
      `${gulp.config('base.src')}/styles/screen.scss`
    ],
    src: [
      `${gulp.config('base.src')}/**/style.scss`,
      `${gulp.config('base.src')}/styles/**/*.{,scss,sass}`
    ],
    dest: cssDir,
    options: {
      filename: 'screen.css'
    }
  }],
  options: {
    includePaths: [
       'node_modules/font-awesome/scss'
    ],
    autoprefixer: {
      browsers: [
        'ie >= 8',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 2.3',
        'bb >= 10'
      ]
    }
  }
}
