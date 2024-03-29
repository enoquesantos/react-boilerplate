const path = require('path')
const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = (env) => {
  const envFile = '.env.dev'
  const envPath = path.resolve(__dirname, envFile)
  const envVars = require('dotenv').config({ path: envPath }).parsed || {}

  return merge(common, {
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
          },
        },
        {
          test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
          use: {
            loader: 'url-loader?limit=100000',
          },
        },
        {
          test: /\.(css|scss)$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
      ],
    },
    devServer: {
      port: 8081,
      historyApiFallback: true,
      static: {
        directory: './public',
      },
      devMiddleware: {
        writeToDisk: true,
      },
    },
    plugins: [
      new DefinePlugin({
        'process.env': JSON.stringify(envVars),
      }),
      new HtmlWebpackPlugin({
        template: './template.dev.html',
      }),
    ],
  })
}
