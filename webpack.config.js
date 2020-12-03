const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { template } = require("lodash");


module.exports = {
    // 入口文件
    entry: resolve('src/index.js'),
    output: {
        filename:"bundle.js",
        path: resolve('dist')
    },
    module:{
        rules:[
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
                test: /\.(html)$/,
                use: {
                  loader: 'html-loader',
                  options: {
                    attrs: [':data-src']
                  }
                }
              }
            // {
            //     test: /\.html$/,
            //     use: [{
            //         loader: 'html-loader',
            //         options: {
            //             minimize: true,
            //             removeComments: false,
            //             collapseWhitespace: false
            //         }
            //      }]
            // }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:resolve('src/public/index.html')
        })
    ],
    mode:"development",
    // mode:"production",
}
function resolve(filePath){
    return path.resolve(__dirname, filePath);
}