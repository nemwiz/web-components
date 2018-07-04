const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './awesome-name-label.js',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CopyWebpackPlugin([
            {from: 'dist/awesome-name-label-bundle.js', to: '../awesome-angular-app/src/web-components/', toType: 'file'}
            ], {})
    ],
    output: {
        filename: 'awesome-name-label-bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
