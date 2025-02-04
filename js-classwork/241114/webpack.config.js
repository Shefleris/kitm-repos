const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry:'./src/app.js', //main js file
    output:{
        path: path.resolve(__dirname,'public'), //location for file generation
        filename:'app.js',
        clean: true //clean after new generation
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/, //compile scss to css
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html', //src html file
            filename:'index.html' //public html file name
        }),
        new MiniCssExtractPlugin({
            filename:'style.css'
        }),
    ],
    devserver: {
        static:'./public',//file location
        port: 3001, //port
        open: true
    },
    mode:'development'
}