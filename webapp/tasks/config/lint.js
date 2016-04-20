export default {
  src: [
    'config/**/*.js{,x}',
    'src*/**/*.js{,x}',
    //'tasks/**/*.js{,x}',
    'gulpfile.babel.js'
  ],
  options: {
    'parser': 'babel-eslint',
    'rules': {
      'semi': ['error', 'never'],
      'comma-dangle': ['error', 'never'],
      'jsx-quotes': ['error', 'prefer-single']
    },
    'extends': 'airbnb',
    'plugins': [
      'react'
    ]
  }
}
