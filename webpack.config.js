const path = require('path');
const HtmlWebpackPluglin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',   
    devtool: 'inline-source-map',
    devserver: {
        static: './dist',
    }, 
    plugins: [
        new HtmlWebpackPluglin({
            title: 'Todo List',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,        
    },
};