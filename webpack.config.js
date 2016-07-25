const context = `${__dirname}/js`,
      entry = 'frontend/system.js',
      path = `${__dirname}/dist`,
      filename = './jor1k.js'

module.exports = {
  context,
  entry,
  output: {
    path,
    filename
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/ } // TODO use include instead
    ]
  }
}
