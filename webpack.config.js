const webpack = require("webpack");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin"); // 生成.html文件的插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 把样式提取为单独的css文件 的插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清除构建目录的插件
module.exports = {
    entry: "./src/main.js", // 打包入口文件
    mode: "development", // 使用开发模式
    devServer: {
        // 本地服务器代理
        contentBase: path.join(__dirname, "dist"), //指定在哪个目录下找要加载的文件
        compress: true,
        port: 8080, // 配置端口
        hot: true, // 配置热更新
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            ignoreOrder: false,
        }),
        new htmlWebpackPlugin({
            // favicon: "./public/favicon.ico",
            filename: "index.html",
            template: "./src/public/index.html",
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                //解析字体
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                loader: "file-loader", // url-loader 也可以用来解析字体
            },
            {
                //匹配哪些文件
                test:/\.(less|css)$/,
                //use执行顺序：从右到左，从下到上
                use:[

                    // 创建style标签，将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    //将css文件变成commonjs模块加载js中，里面内容是样式字符串
                    'css-loader',
                    'less-loader',
                ]
            },
            {

                // 处理图片资源,但是处理不了html中img的路径问题
                test: /\.(jpg|png|gif)$/,
                loader:'url-loader',
                options:{
                    limit: 8* 1024,
                    // 关闭es6
                    esModule:true,
                    name:'[hash:10].[ext]' //不重复名字
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            // {
            //     //解析字体
            //     test: /\.(woff|woff2|eot|ttf|otf)$/,
            //     use: "file-loader", // url-loader 也可以用来解析字体
            // },
            // {
            //     test: /\.css$/,
            //     use: [MiniCssExtractPlugin.loader, "css-loader"], // 处理css的loader
            // },

        ],
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "app.[hash:16].js",
        publicPath: "./", // 也可以用来处理路径问题，加在所有文件路径前的根路径
    },
};