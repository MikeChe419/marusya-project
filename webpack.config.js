const path = require('path'); //служит для преобразования относительного пути в абсолютный
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

 
function setupDevtools() {  
    if (IS_DEV) return 'eval'; 
    if (IS_PROD) return false; 
}

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], 
    },
    mode: NODE_ENV ? NODE_ENV : 'development', 
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        filename: 'index.js', 
        path: path.resolve(__dirname, 'dist'), 
    },

    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/react", "@babel/typescript", ["@babel/env", { "modules": false }]],
                    }
                }
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                "style-loader",
                "css-loader",
                {
                  loader: "sass-loader",
                //   options: {
                //     // Prefer `dart-sass`, even if `sass-embedded` is available
                //     implementation: require("sass"),
                //   },
                },
              ],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: 'asset/resource',
                use: {
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        outputPath: './images'
                    }
                }
            }
        ]
    },

    plugins: [ 
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
        new CleanWebpackPlugin(),
        // new HotModuleReplacementPlugin(),
        new miniCss({
        filename: 'style.css',
        })
    ],
    
    devServer: { 
      port: 3000, 
      open: true,
      hot: IS_DEV, 
    },

  devtool: setupDevtools(),
};