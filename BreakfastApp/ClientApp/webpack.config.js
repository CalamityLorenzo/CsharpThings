const path = require('path');
var config = {
    entry: {
        app: './code/src/app.tsx',
        library: './code/src/library.ts'
    },
    mode: "development",
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'code/dist')
    },
    node:{
        fs: 'empty',
        net: 'empty',
        tls:'empty'
    }
};
module.exports = config;
