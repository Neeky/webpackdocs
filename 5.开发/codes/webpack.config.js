const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {

entry: ['./src/index.js','./src/print.js'
],

output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
 },

plugins: [
    new HtmlWebpackPlugin({
       title: 'Output Management'
    }),
    new CleanWebpackPlugin()
   ],

devtool:'inline-source-map',

devServer: {
     contentBase: './dist'
   },
};