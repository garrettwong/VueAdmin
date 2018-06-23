var path = require('path');
var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    entry: {
        AppMain: './dist/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/
          },
          {
              test: /\.(png|jpg|gif|svg)$/,
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]?[hash]'
              }
          },
          {
              test: /\.vue$/,
              loader: 'vue-loader',
              options: {
                  loaders: {
                  }
              }
          },
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
          }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.vue'],

        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    externals: {
        jQuery: 'jQuery',
        $: 'jQuery',
        //vue: 'Vue',
        //"vue-router": 'Vue-Router'
    },
    plugins: [    
        // for third party libraries that require jquery
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery',
        }), 
        
        new VueLoaderPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
      new webpack.DefinePlugin({
          'process.env': {
              NODE_ENV: '"production"'
          }
      }),
      new webpack.optimize.UglifyJsPlugin({
          sourceMap: true,
          compress: {
              warnings: false
          }
      }),
      new webpack.LoaderOptionsPlugin({
          minimize: true
      })
    ])
}
