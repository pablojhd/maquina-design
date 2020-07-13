const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = env => {
    console.log('NODE_ENV: ', env.NODE_ENV)
    return {
        mode: env.NODE_ENV,
        devtool: env.NODE_ENV === 'develompent' ? 'none' : 'source-map',
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, '..', 'public', 'EJERCICIOS', 'Nivel-11', 'Eje-00', 'OA-00', 'IE-00', '110000000000000'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
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
        plugins: [
            new MiniCSSExtractPlugin({
                filename: path.join('..', '..', '..', '..', 'css', 'bundle.css')
            })
        ],
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    extractComments: false
                })
            ]
        }
    }
}