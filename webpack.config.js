/* webpack.config.js*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "src/index.html"),
    filename: "index.html"
});


module.exports = {

    mode: "development",

    entry: './src/index.js',

    output: {
        path:path.resolve(__dirname, 'dist'), 
        filename:"bundle.js"
    },

    watch: true,

    module: {
        rules: [
    
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]

            },
            

            {
                test:/\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    }],
                    publicPath: './dist'
                })
            }]
            },

            devServer:{
                contentBase: path.join(__dirname, 'dist'),
                compress: true,
                port: 3001
            },
  

    plugins: [
       htmlWebpackPlugin,
       new ExtractTextPlugin('style.css')
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    }

};