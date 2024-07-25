const { merge } = require("webpack-merge")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const commonConfig = require("./webpack.config.common")

module.exports = merge(commonConfig, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
      reportFilename: "report.html",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          chunks: "all",
          name: "vendor",
          test: /node_modules/,
        },
      },
    },
  },
})
