const merge = require( 'webpack-merge' );
const commonConfig = require( './webpack.config.common.js' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );

const productionConfig = merge( commonConfig, {
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(c|sa|sc)ss$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]

} );

module.exports = productionConfig;

