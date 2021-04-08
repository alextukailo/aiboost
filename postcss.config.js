const { plugin } = require('postcss');

module.exports = {
    plugins: [
      // require('postcss-nested'),
      // require('autoprefixer'),
      require('postcss-cssnext'),
      require('cssnano')({
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true
            }
          }
        ]
      })
    ]
  }