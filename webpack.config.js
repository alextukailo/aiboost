const path = require('path')
const webpack = require('webpack')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: [
            './js/app.js',
            './scss/app.scss'
        ],
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '../'
    },
    devServer: {
        contentBase: "./app"
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            reloadAll: true
                        }
                    },
                    // 'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                      },
                  },
                  'img-loader',
                ],
              },
              {
                  test: /\.js$/,
                  loader: 'babel-loader',
                  exclude: '/node_modules/'
              }
            
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '../'
        }),
        new CopyPlugin(
            {
                patterns: [
                    { 
                        from: './img', to: 'img', }
                ]
            },
            {
                ignore: [
                    { glob: 'svg/*' }
                ]
            }
        ),
    ],
}