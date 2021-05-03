const path = require("path");

module.exports = {
  devtool: 'cheap-module-source-map',
  mode: process.env.NODE_ENV || 'development',
  entry: {
    main: path.join(__dirname, 'src')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}

