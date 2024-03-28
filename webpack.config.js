const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/script.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js'
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.svg$/,
      type: 'asset/resource'
    }, {
      test: /\.(ts|tsx)$/,
      use: 'ts-loader',
      exclude: /node_modules/
    },{
		test: /\.(png|svg|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
	 }]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
  devServer: {
    open: true,
  }
}
