import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin' //この行を追記

const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

export default {
  mode: 'development',
  entry: src + '/index.tsx',

  output: {
    path: dist,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }

    ]
  },

  resolve: {
    extensions: ['.js', '.jsx','.ts', '.tsx','.json']
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: src + '/index.html',
        filename: 'index.html'
      })
  ]
}