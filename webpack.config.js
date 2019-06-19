const path = require('path');

module.exports = {
  entry: ['./client/src/Index.js'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client/dist'),
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules|packages/,
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader','sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    contentBase: './client/dist',
    host: 'localhost',
    historyApiFallback: true,
    // respond to 404s with index.html
    inline: true,
  },
};
