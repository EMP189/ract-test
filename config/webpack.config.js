const config = require('./webpack.config.js');

config.devServer = {
    historyApiFallback: true, // in case there is an error return 404 error
    port: 8080,
    loveReload: true, // refreshes the browser when changes are saved
    open: true, //opnes the project in the browser when the server starts
};

// a tool to find errors in the compiled code
config.devtool = 'inline-source-map';

module.exports = config;