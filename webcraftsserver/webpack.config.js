var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './webcrafts_es6/react-main.js',
    output: {path: __dirname, filename: './public/javascripts/bundle.js'},
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {presets: ['env', 'react']}
            }
        ]
    },
    devtool: "webcrafts_es6-map",
};
