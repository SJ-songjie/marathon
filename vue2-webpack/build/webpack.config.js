const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ProgressBarWebpackPlugin = require("progress-bar-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: process.env.NODE_ENV === "prod" ? "production" : "development", // 开发模式
  entry: "./src/main.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },

  devServer: {
    open: true,
    hot: true,
    port: "8888",
  },

  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "../src"),
    },
  },

  optimization: {
    nodeEnv: false,
  },

  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`),
    }),

    new HtmlWebpackPlugin({
      title: "Vue2Webpack5",
      template: "./index.html",
      favicon: "./favicon.ico",
    }),

    new ProgressBarWebpackPlugin({
      complete: "█",
      clear: true,
    }),

    new MiniCssExtractPlugin({
      filename:
        process.env.NODE_ENV === "prod"
          ? "css/[name].[contenthash].css"
          : "css/[name].css",
      chunkFilename:
        process.env.NODE_ENV === "prod"
          ? "css/[name].[contenthash].css"
          : "css/[name].css",
    }),

    new CssMinimizerPlugin(),

    new CleanWebpackPlugin(),

    new VueLoaderPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.(ts|js)x?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === "prod"
            ? MiniCssExtractPlugin.loader
            : "vue-style-loader",
          "css-loader",
        ],
      },
      {
        test: /.less$/,
        use: [
          process.env.NODE_ENV === "prod"
            ? MiniCssExtractPlugin.loader
            : "vue-style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: "images/[base]",
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: "asset",
        generator: {
          filename: "files/[base]",
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: "asset",
        generator: {
          filename: "media/[base]",
        },
      },
    ],
  },
};
