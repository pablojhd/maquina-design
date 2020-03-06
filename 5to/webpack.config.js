const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const mode = process.env.NODE_ENV || 'development'
const devtool = mode === 'develompent' ? 'source-map' : 'inline-source-map'

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, '..', 'public', 'EJERCICIOS', 'Nivel-5', 'Eje-00', 'OA-00', 'IE-00', '000000000000000'),
        filename: 'index.js'
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: path.join('..', '..', '..', '..', 'css', 'index.css')
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
                {
                    loader: 'css-loader',
                    options: {
                        url: false
                    }
                },
                'sass-loader',
            ]
        }]
    },
    devtool,
    mode
}