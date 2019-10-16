  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const MiniCssExtractPlugin = require("mini-css-extract-plugin");

  const {
      CleanWebpackPlugin
  } = require('clean-webpack-plugin');


  module.exports = {
      mode: 'development',
      devtool: 'inline-source-map',
      entry: {
          "mainCss": "./src/sass/main.sass",
          "indexCss": "./src/sass/index.sass",
          "worksCss": "./src/sass/works.sass",
          "aboutCss": "./src/sass/about.sass",
          "main": './src/js/main.js',
          "animate": './src/js/animation.js'
      },
      devServer: {
          contentBase: './dist'
      },
      module: {
          rules: [{
                  //若是SCSS or sass
                  test: /\.(scss|sass)$/,
                  //使用
                  use: [
                // 需要用到的 loader
                      {
                          loader: MiniCssExtractPlugin.loader,
                          options: {
                              publicPath: '../'
                          }
                  },
                      {
                          loader: "css-loader"
                  }, {
                          loader: "postcss-loader", // Run postcss actions
                          options: {
                              plugins: function () { // postcss plugins, can be exported to postcss.config.js
                                  return [
          require("autoprefixer")
        ];
                              }
                          }
                  },
                      {
                          loader: "sass-loader"
                  }
            ]
        }, {
                  test: /\.pug$/,
                  use: ['pug-loader']
    },
              {
                  test: /\.(jpg|png|gif|woff|eot|ttf|svg)/,
                  use: {
                      loader: 'url-loader', // this need file-loader
                      options: {
                          outputPath: 'img',
                          limit: 50000

                      }
                  }
           }]
      },
      plugins: [
      new CleanWebpackPlugin({
              cleanAfterEveryBuildPatterns: ['dist']
          }),
          new MiniCssExtractPlugin({
              // 指定輸出位置
              // [name] 為上方進入點設定的 "名稱"
              filename: "./css/[name].css"
          }),
           new HtmlWebpackPlugin({
              filename: 'index.html',
              template: './src/index.pug'
          }),
           new HtmlWebpackPlugin({
              inject: false,
              filename: 'about.html',
              template: './src/About.pug'
          }),
           new HtmlWebpackPlugin({
              inject: false,
              filename: 'Works.html',
              template: './src/Works.pug'
          }),
           new HtmlWebpackPlugin({
              inject: false,
              filename: 'home.html',
              template: './src/home.pug'
          })
    ],
      output: {
          filename: 'js/[name].bundle.js',
          path: path.resolve(__dirname, 'dist')
      }
  };
