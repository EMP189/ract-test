const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_DIRECTORY = path.join(__dirname, '../'); // root to the project
const PUBLIC_DIRECTORY = path.join(ROOT_DIRECTORY, 'public');

const config = {
    entry: [path.resolve(ROOT_DIRECTORY, 'src/index.js')], // thi sis the main js file of the project is kept, at the entry point
    output: { // instructions for compiling the code
        path: path.resolve(ROOT_DIRECTORY, 'build'), // path where the compiled code should go
        filename: 'bundle.js', //filename of the compiled code
        publicPath: '/',
    },
    //this tells the webpack to use its built-in optimisations
    mode: 'development',
    resolve:{
        modules: [path.resolve('node_modules'), 'node_modules'], // where to look for the node modules
    },
    performance:{
        hints: false,
    },
    plugins:[
        // plugins we are using to help the compiling
        new HtmlWebpackPlugin({
            template: path.join(PUBLIC_DIRECTORY, 'index.html')
        }),
    ],
    module:{
        // helpers we want webpack to use
    rules: [
        {
          test: /\.(js|jsx)$/,
          resolve: {
            extensions: [".js", ".jsx"]
          },
          exclude: /nodeModules/,
          use: {
            loader: 'babel-loader',
            options: { presets: ['@babel/env','@babel/preset-react'] },  
          }
        },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.(png|svg|gif|jpg|pdf)$/,
              use: ['file-loader'],
            },
        ],
    },
};

module.exports = config;