const isDevelopment = process.env.NODE_ENV !== 'production';
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[fullhash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[fullhash].css',
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
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          {
            loader: isDevelopment
              ? 'style-loader'
              : MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          {
            loader: isDevelopment
              ? 'style-loader'
              : MiniCssExtractPlugin.loader,
          },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: !isDevelopment,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.wasm',
      '.ts',
      '.tsx',
      '.mjs',
      '.cjs',
      '.js',
      '.json',
      '.scss',
      '.gif',
      '.png',
      '.jpg',
      '.jpeg',
      '.svg',
    ],
  },
};
