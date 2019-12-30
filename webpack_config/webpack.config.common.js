const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const MediaQueryPlugin = require( 'media-query-plugin' );

const config = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve( __dirname, '../build' ),
  },
  context: path.resolve( __dirname, '../src' ),

  plugins: [
    new CopyWebpackPlugin( [
                             {
                               from: '../src/assets/images', to: '../build/assets/images',
                             },
                             {
                               from: '../src/data', to: '../build/data',
                             },
                           ] ),
    new MiniCssExtractPlugin( ),

    new HtmlWebpackPlugin( {
                             template: 'index.html',
                             meta: {
                               viewport: 'width=device-width, initial-scale=1',
                             }
                           } )
  ],
  module: {
    rules: [
      /*
       * STYLES RULE
       * */
      {
        test: /\.(c|sa|sc)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: true,
            }
          },
          MediaQueryPlugin.loader,

          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: (loader) => [
                require( 'autoprefixer' ),
                require( 'cssnano' ),
              ]
            }
          },
          'sass-loader',
        ],
      },
      /*
       * IMAGES RULE
       * */
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images',
              publicPath: 'assets/images',
            }
          }
        ]
      },
      /*
       * FONTS RULE
       * */
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts',
              publicPath: 'assets/fonts',
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;
