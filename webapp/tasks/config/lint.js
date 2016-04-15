export default {
  src: [
    'config/**/*.js{,x}',
    'src*/**/*.js{,x}',
    //'tasks/**/*.js{,x}',
    'gulpfile.babel.js'
  ],
  options: {
    "parser": "babel-eslint",
    "rules": {
      'semi': 0,
      'comma-dangle': 0,
      'jsx-quotes': 0
    },
    "extends": "airbnb",
    "plugins": [
      "react"
    ]
  }
}
