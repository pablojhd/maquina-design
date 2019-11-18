const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const mode = process.env.NODE_ENV || 'development'
const devtool = mode === 'develompent' ? 'source-map' : 'inline-source-map'

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets'),
        filename: 'index.js'
    },
    plugins: [
        new MiniCSSExtractPlugin({
            // TODO: modificar ruta para que no muera en Windows
            filename: 'index.css',
            options: {
                url: false
            }
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },{
            test: /\.scss$/, 
            use: [
                MiniCSSExtractPlugin.loader,
                "css-loader",
                'sass-loader',
            ]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/assets/',
        port: 3000,
        open: true,
        historyApiFallback: true
    },
    devtool,
    mode
}