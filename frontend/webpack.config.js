const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
console.log(path.join(__dirname, 'dist'));
module.exports = {
    entry: './src/js/main.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: './dist',
        open: true,
        compress: true,
        hostname: 'http://localhost:8080/ws',
        hot: true,
        port: 8080,
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: "src/public", to: '' }
            ]
        })
    ]
};
