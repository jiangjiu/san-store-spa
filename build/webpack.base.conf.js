/**
 * @file webpack.base.config inspired by vue-cli
 * @author jady
 */

const path = require('path');
const utils = require('./utils');
const config = require('../config');
const sanLoaderConfig = require('./san-loader.conf');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.san', '.json'],
        alias: {
            'san': process.env.NODE_ENV === 'production'
                ? 'san/dist/san.js'
                : 'san/dist/san.dev.js'
        }

    },
    module: {
        rules: [
            {
                test: /\.san$/,
                loader: 'san-loader',
                options: sanLoaderConfig,
                include: [resolve('src')]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')]

            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new CaseSensitivePathsPlugin()
    ]
};