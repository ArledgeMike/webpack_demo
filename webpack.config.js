const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    app: path.join(__dirname,'app'),
    build: path.join(__dirname, 'build')
}

module.exports = {

    entry:{
        app:PATHS.app
    },
    output:{
        path:PATHS.build,
        filename: '[name].js'
    },
    
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Webpack Demo'
        }),
        new ExtractTextPlugin('[name].css')
    ],
    module:{
        loaders:[
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css'),
                include: PATHS.app
                
            }
        ]
    }

}