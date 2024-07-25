const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  context: resolve(__dirname, "src"),
  entry: "./index.ts",
  output: {
    filename: "[name].[contenthash].js",
    path: resolve(__dirname, "dist"),
    clean: true
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "public/index.html"),
      filename: "index.html",
      chunks: ["main"],
      minify: false
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "public/product.html"),
      filename: "product.html",
      chunks: ["main"],
      minify: false
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "public/profile.html"),
      filename: "profile.html",
      chunks: ["main"],
      minify: false
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "public/selection.html"),
      filename: "selection.html",
      chunks: ["main"],
      minify: false
    }),
    new CopyPlugin({
      patterns: [
        {
          from: resolve(__dirname, "public/assets"),
          to: resolve(__dirname, "dist/assets")
        },
        // {
        //   from: resolve(__dirname, "public/favicon.png"),
        //   to: resolve(__dirname, "dist")
        // }
      ]
    }),
    new MiniCssExtractPlugin(),
    new ESLintPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("postcss-preset-env")]
              }
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource"
      },
      {
        test: /\.[tj]s?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};