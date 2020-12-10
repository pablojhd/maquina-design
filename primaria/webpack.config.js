const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = env => {
    console.log('NODE_ENV: ', env.NODE_ENV)
    console.log('nivelFolder: ', env.nivelFolder)
    console.log('ejercicioFolder: ', env.ejercicioFolder.toString())
    return {
        mode: env.NODE_ENV,
        devtool: env.NODE_ENV === 'develompent' ? 'source-map' : 'inline-source-map',
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, '..', 'public', 'EJERCICIOS', env.nivelFolder, 'Eje-00', 'OA-00', 'IE-00', env.ejercicioFolder.toString()),
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