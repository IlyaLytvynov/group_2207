module.exports = {
  entry: {
    scripts: './src/scripts.ts'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  devServer: {
    contentBase: __dirname + '/build',
    compress: true,
    port: 9000
  }
};
