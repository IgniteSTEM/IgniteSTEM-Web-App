let path = require('path');
let nodeExternals = require('webpack-node-externals');

let entries = {
    'dist/index': ['babel-polyfill', './server/src/index.js'],
};

module.exports = {
    devtool: 'source-map',
    entry: entries,
    target: 'node',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './'),
        libraryTarget: "commonjs",
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
                presets: ['airbnb']
            }
          }
        }]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules/'
        ],
        extensions: [".js"]
    },
    devtool: 'cheap-module-eval-source-map',
    stats: {
        colors: true, // Include colors in output
        errorDetails: true,
        timings: true,
    },
    node: {
        __dirname: true
    }
}
