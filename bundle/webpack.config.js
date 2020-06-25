const path = require('path')

module.exports = env => {
    console.log('NODE_ENV: ', env.NODE_ENV)
    return {
        entry: './script/index.js',
        output: {
            path: path.resolve(__dirname, '..', 'public', 'EJERCICIOS', 'Nivel-5', 'Eje-00', 'OA-00', 'IE-00', '000000000000000'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }]
        },
        mode: env.NODE_ENV
    }
}