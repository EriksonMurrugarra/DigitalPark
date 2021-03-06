const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtendDefinePlugin = require('extended-define-webpack-plugin');
const ProdEnv = require('./envs/prod.json');

module.exports = (env) => {
  const plugins = [
    new ExtractTextPlugin("css/[name].prod.css")
  ]

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], {root: __dirname})
    )

    plugins.push(
      new ExtendDefinePlugin(ProdEnv)
    )
  }

  return {

    entry: {
      digitalpark: path.resolve(__dirname, 'src/app.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].prod.js',
      publicPath: path.resolve(__dirname, 'dist')+"/",
      chunkFilename: 'js/[id].js',
    },
    devServer: {
      port: 9000,
    },
    module: {
      rules: [
        {
          // test: que tipo de archivo quiero reconocer,
          // use: que loader se va a encargar del archivo
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-2'],
            }
          },
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                }
              }
            ]
          })
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'images/[name].[ext]',
            }
          }
        },
      ]
    },
    plugins
  }
}
