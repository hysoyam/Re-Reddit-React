const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')
const { DefinePlugin } = require('webpack');
const { config } = require('../config');
const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEX = /\.global\.css$/



const COMMON_PLUGINS = [
    new DefinePlugin({
        'process.env.CLIENT_ID': `'${config.CLIENT_ID}'`
    }),
]

module.exports = {

    mode: NODE_ENV ? NODE_ENV : 'development',
    target: 'node',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js',
        // clean: true,

    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            }, {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            },
                            onlyLocals: true,
                        }
                    }
                ],
                exclude: GLOBAL_CSS_REGEX
            },
            {
                test: GLOBAL_CSS_REGEX,
                use: [
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ],

    },
    externals: [webpackNodeExternals()],
    optimization: {
        minimize: false,
    },
    plugins: COMMON_PLUGINS,
}