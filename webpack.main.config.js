const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");
const LiveReloadPlugin = require("webpack-livereload-plugin");
const microCallejeroUrl = "http://localhost:3001";
const microUsersUrl = "http://localhost:3003";
const libsUrl = "http://localhost:3002";

module.exports = {
  entry: "./apps/main/src/index",
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  devServer: {
    hot: false,
    static: path.join(__dirname, "dist"),
    port: 3000,
    historyApiFallback: {
      index: "index.html",
    },
  },
  output: {
    publicPath: "auto",
    clean: true,
    path: path.join(__dirname, "dist/main"),
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        microCallejero: "microCallejero@[microCallejeroUrl]/remoteEntry.js",
        microUsers: "microUsers@[microUsersUrl]/remoteEntry.js",
        libs: "libs@[libsUrl]/remoteEntry.js",
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./apps/main/public/index.html",
    }),
    new LiveReloadPlugin({
      port: 35729,
    }),
  ],
};
  