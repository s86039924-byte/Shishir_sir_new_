const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

class CopyPublicAssetsPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap('CopyPublicAssetsPlugin', () => {
      const publicDir = path.resolve(__dirname, 'public');
      const outputDir = compiler.options.output.path;

      if (!fs.existsSync(publicDir) || !outputDir) {
        return;
      }

      for (const entry of fs.readdirSync(publicDir)) {
        if (entry === 'index.html') {
          continue;
        }

        fs.cpSync(path.join(publicDir, entry), path.join(outputDir, entry), {
          recursive: true,
          force: true,
        });
      }
    });
  }
}

module.exports = (_, argv = {}) => {
  const isProd = argv.mode === 'production';

  return {
    entry: './index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,
      publicPath: '/',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.css$/i,
          use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      ...(isProd
        ? [
            new MiniCssExtractPlugin({
              filename: '[name].[contenthash].css',
            }),
            new CopyPublicAssetsPlugin(),
          ]
        : [new CopyPublicAssetsPlugin()]),
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      runtimeChunk: 'single',
    },
    devServer: {
      host: '0.0.0.0',
      allowedHosts: 'all',
      static: {
        directory: path.resolve(__dirname, 'public'),
        publicPath: '/',
      },
      port: 'auto',
      hot: true,
      historyApiFallback: true,
    },
  };
};
