const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const StylelintPlugin = require("stylelint-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const styleLoader = isProduction
    ? MiniCssExtractPlugin.loader
    : "style-loader";
  const isStats = env.stats;

  return {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/i,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        },
        {
          test: /\.scss$/,
          use: [styleLoader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      compress: true,
      port: 8080,
      open: true,
      hot: true,
    },
    plugins: [
      new ESLintPlugin({
        extensions: ["ts", "tsx"],
        fix: true,
      }),
      new StylelintPlugin({
        files: "**/*.scss",
        fix: true,
      }),
      new Dotenv(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
      }),
      ...(isProduction
        ? [new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" })]
        : []),
      ...(isStats ? [new BundleAnalyzerPlugin()] : []),
    ],
    optimization: {
      minimize: isProduction,
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
    },
  };
};
