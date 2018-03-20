const path = require('path');
const webpack = require('webpack');

const config = {
  context: __dirname,
  entry: ['./js/ClientApp.jsx'],
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-eval-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
};

if (process.env.NODE_ENV === 'development') {
  config.entry.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000');
}

module.exports = config;

// const path = require('path')
// const webpack = require('webpack')

// module.exports = {
//     context: __dirname,
//     entry: [
//         'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', 
//         './js/ClientApp.jsx'
//     ],
//     // entry: [
//     //     'react-hot-loader/patch',
//     //     'webpack-dev-server/client?http://localhost:8080',
//     //     'webpack/hot/only-dev-server',
//     //     './js/ClientApp.jsx'
//     // ],
//     devtool: process.env.NODE_ENV === 'development' ? 'cheap-eval-source-map' : false,
//     output: {
//         path: path.resolve(__dirname, 'public'),
//         filename: 'bundle.js',
//         publicPath: '/public/'
//     },
//     devServer: {
//         hot: true,
//         publicPath: '/public/',
//         historyApiFallback: true
//     },
//     resolve: {
//         extensions: ['.js', '.jsx', '.json']
//     },
//     stats: {
//         colors: true,
//         reasons: true,
//         chunks: false
//     },
//     plugins: [
//         new webpack.HotModuleReplacementPlugin(),
//         new webpack.NamedModulesPlugin()
//     ],
//     module: {
//         rules: [
//             {
//                 enforce: "pre",
//                 test: /\.js$/,
//                 loader: "eslint-loader",
//                 exclude: /node_modules/
//             },
//             {
//                 test: /\.jsx?$/,
//                 loader: 'babel-loader'
//             }
//         ]
//     }
// }