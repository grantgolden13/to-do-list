const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devServer: {
        static: "./dist",
    },
    devtool: "eval-cheap-source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};