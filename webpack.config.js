const isDevelopment = process.env.NODE_ENV !== 'production';
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  output: {
    filename: isDevelopment ? '[name].js' : '[name].[fullhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: !isDevelopment },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.wasm', '.ts', '.tsx', '.mjs', '.cjs', '.js', '.json'],
  },
};
