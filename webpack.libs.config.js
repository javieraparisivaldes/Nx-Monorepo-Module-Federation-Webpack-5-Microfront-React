const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./apps/libs/src/index",
  mode: "development",
  devServer: {
    port: 3002,
    static: path.join(__dirname, "dist"),
  },
  output: {
    publicPath: "auto",
    clean: true,
    path: path.join(__dirname, "dist/libs"),
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
  },
  module: {},
  plugins: [
    new ModuleFederationPlugin({
      name: "libs",
      filename: "remoteEntry.js",
      exposes: {
        "./react": "react",
        "./react-dom": "react-dom",
        "./react-router-dom": "react-router-dom",
      },
    }),
  ],
};
