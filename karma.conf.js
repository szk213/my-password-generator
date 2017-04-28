module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'riot'],
    plugins: [
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-riot',
      'karma-webpack'
    ],
    files: [
      'src/**/*.tag',
      'test/**/*.js'
    ],
    preprocessors: {
      'src/**/*.tag': ['riot'],
      'test/**/*.js': ['webpack']
    },
    riotPreprocessor: {
      options: {
        type: 'es6'
      }
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['babel-preset-power-assert']
            }
          }
        ]
      },
      node: {
        fs: 'empty'
      }
    },
    browsers: ['PhantomJS'],
    reporters: ['mocha'],
    singleRun: true
  })
}