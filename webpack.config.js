const path = require('path');

const { ModuleFederationPlugin } = require('webpack').container;

const mode = process.env.NODE_ENV || 'production';

module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    publicPath: "http://localhost:3001/"
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3001,
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },  

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app2",
      library: { type:"var", name: "app2" },
      filename: "remoteEntry.js",
      exposes: {
        "./app": "./src/component",
      },
      shared: ["react", "react-dom"],
    }),
  ]
}