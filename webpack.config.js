const path = require('path');
const webpack = require('webpack');
const SRC_DIR = path.resolve(__dirname, 'src');
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const config = {
    entry: path.resolve(SRC_DIR, 'app.js'),
    output: {
        filename: "bundle.js",
        path: PUBLIC_DIR
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            }
        ]
    }
};

module.exports = config;