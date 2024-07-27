const path = require('path');

module.exports = {
    entry: './scr/index.js', //este es el punto de entrada de la aplicacion
    output:{
        filename: 'bundle.js', //nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //Carpeta de salida
    },
    module:{
        rules: [
            {
                test: /\.css$/,//Regex (esprecion reular) para identificar archivos css
                use: [ 'style-loader', 'css-loader'], // Loaders son librerias para procesar archivos css
            }, 
            {
                test: /\.js$/, // regex para identificar archivos JS
                exclude: /node_modules/, //exluir la carpeta node_modules
                use:{
                    loader:'babel-loader', //loader lleva el Js moderno
                    option:{
                        presets:[ '@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //generar source map para facilitar la depuracion
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), // 
        compress: true, // habilitar la compresion gzip
        port: 9000, // puerto del servidor de desarrollo
    },
};