import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { fileURLToPath } from "url";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import Dotenv from "dotenv-webpack";
import ESLintPlugin from "eslint-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import StylelintPlugin from "stylelint-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, argv) => {
  const isProduction = argv.mode === "production";
  const styleLoader = isProduction
    ? MiniCssExtractPlugin.loader
    : "style-loader";
  const isStats = env.stats;

  return {
    mode: "development",
    entry: {
      index: "./src/index.tsx",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "js/[name].[contenthash].js",
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
        ? [
            new MiniCssExtractPlugin({
              filename: "css/[name].[contenthash].css",
            }),
          ]
        : []),
      ...(isStats ? [new BundleAnalyzerPlugin()] : []),
    ],
    optimization: {
      minimize: isProduction,
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
      splitChunks: {
        chunks: "all",
      },
    },
    performance: {
      hints: isProduction ? "warning" : false,
      maxAssetSize: 256 * 1024, // 256 KB by asset
      maxEntrypointSize: 256 * 1024, // 256 KB by entry point
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
    },
  };
};
