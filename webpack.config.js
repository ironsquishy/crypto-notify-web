require('dotenv').config;


const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template : './app/index.html',
    filename : './index.html'
});


let config = {
    stats : 'minimal',
    entry : './app/index.js',
    output : {
        path : path.resolve(__dirname, 'public'),
        filename : 'bundle.js'
    },

    resolve : {
        extensions : ['.js', '.jsx', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png'],
        alias : {
            images : path.resolve(__dirname, 'app/assets/images')
        }
    },

    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader'
                }
            },
            {
                test : /\.jsx$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader',
                    // options : {
                    //     presets : ["env", "react"]
                    // }
                }
            },
            // {
            //     test : /\.scss$/,
            //     use : ['css-hot-loader'].concat(ExtractTestWebpackPlugin.extract({
            //         fallback : 'style-loader',
            //         use : ['css-loader', 'sass-loader', 'postcss-loader']
            //     }))
            // },
            {
                test : /\.css$/,
                use : [{
                        loader : 'style-loader'
                    },
                    {
                        loader : 'css-loader',
                        options : {
                            modules : true,
                            importLoaders : 1,
                            localIdentNumber : "[name]_[local]_[hash:base64]",
                            sourceMap : true,
                            minimize : true
                        }
                    }
                ]
            },
            // {
            //     test : /\.(jpe?g|png|gif|svg)$/i,
            //     loaders : ['file-loader?context=app/assets/images/&name=images/[path][name].[ext]', {
            //         loader : 'image-webpack-loader',
            //         query : {
            //             mozjpeg : {
            //                 progressive : true
            //             },
            //             gifsicle : {
            //                 interlaced : true
            //             },
            //             optipng : {
            //                 optimizationLevel : 4
            //             },
            //             pngqaunt : {
            //                 quality : '75-90',
            //                 speed : 3
            //             }
            //         }
            //     }],
            //     exclude : /node_modules/,
            //     include : __dirname
            // }
        ]
    },

    plugins : [htmlWebpackPlugin],
    devServer : {
        contentBase : path.resolve(__dirname, 'public'),
        historyApiFallback : true,
        inline : true,
        compress : true,
        proxy : {
            'api' : 'localhost:3000'
        }
    },
    devtool : 'eval-source-map'
}

module.exports = config;

// if(process.env.NODE_ENV == 'production'){
//     module.exports.plugins.push();
// }