const path = require('path');
const webpackDashboard = require('webpack-dashboard/plugin');
module.exports = {
  entry: './src/app.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  externals: {
    config: JSON.stringify({
      url: 'http://localhost:4040/api/v1'
    })
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /[\/\\](node_modules|public\/)[\/\\]/
      }
    ]
  },
  plugins: [new webpackDashboard()],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    watchOptions: {
      poll: true
    }
  }
};
