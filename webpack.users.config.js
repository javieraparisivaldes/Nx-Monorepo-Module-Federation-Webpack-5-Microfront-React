const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const libsUrl = "http://localhost:3002";

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: "./apps/users/src/main.tsx",
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  devServer: {
    hot: true,
    static: path.join(__dirname, "dist"),
    port: 3003,
    liveReload: false,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json", ".css"],
    plugins: [new TsconfigPathsPlugin()]
  },
  output: {
    publicPath: "auto",
    clean: true,
    path: path.join(__dirname, "dist/users"),
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
          plugins: [require.resolve("react-refresh/babel")],
        },
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: "apps/users/tsconfig.app.json"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "microUsers",
      filename: "remoteEntry.js",
      exposes: {
        "./Profile": "./apps/users/src/profile/Profile",
        "./Main": "./apps/users/src/app/app",
      },
      remotes: {
        libs: "libs@[libsUrl]/remoteEntry.js",
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./apps/users/public/index.html",
      chunks: ["main"],
    }),
    new ReactRefreshWebpackPlugin({
      exclude: [/node_modules/, /bootstrap\.js$/],
    })
  ]
};
