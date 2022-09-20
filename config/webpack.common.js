const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyserPlugin

const paths = require('./paths')

module.exports = {
  // Where webpack looks to start building the bundle
  entry: {
    index: paths.src + '/assets/js/index.js',
    admin: paths.src + '/assets/js/admin.js',
    banking: paths.src + '/assets/js/banking.js',
    store: paths.src + '/assets/js/store.js',
    women: paths.src + '/assets/js/women.js',
    men: paths.src + '/assets/js/men.js',
    blog: paths.src + '/assets/js/blog.js',
    social: paths.src + '/assets/js/social.js',
    mapme: paths.src + '/assets/js/mapme.js',
    forms: paths.src + '/assets/js/forms.js',
  },

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    // filename: '[name].[contenthash].js',
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.src + '/assets/img',
          to: 'img',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML FILES FOR EACH PAGE from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'My Home',
      favicon: paths.src + '/assets/img/favicon.png',
      template: paths.src + '/views/index.html', // template file
      inject: true,
      chunks: ['index'],
      filename: 'index.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),

    new HtmlWebpackPlugin({
      title: 'admin',
      favicon: paths.src + '/assets/img/favicon.png',
      template: paths.src + '/views/admin.html', // template file
      inject: true,
      chunks: ['admin'],
      filename: 'admin.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),

    new HtmlWebpackPlugin({
      title: 'Banking Pleasure',
      favicon: paths.src + '/assets/img/favicon.png',
      template: paths.src + '/views/banking.html', // template file
      inject: true,
      chunks: ['banking'],
      filename: 'banking.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),

    new HtmlWebpackPlugin({
      title: 'store',
      favicon: paths.src + '/assets/img/favicon.png',
      template: paths.src + '/views/store.html', // template file
      inject: true,
      chunks: ['store'],
      filename: 'store.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),

    new HtmlWebpackPlugin({
      title: 'women',
      favicon: paths.src + '/assets/img/favicon.png',
      template: paths.src + '/views/women.html', // template file
      inject: true,
      chunks: ['women'],
      filename: 'women.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),

    new HtmlWebpackPlugin({
      title: 'men',
      favicon: paths.src + '/assets/img/favicon.png',
      template: paths.src + '/views/men.html', // template file
      inject: true,
      chunks: ['men'],
      filename: 'men.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),

    new HtmlWebpackPlugin({
      title: 'blog',
      favicon: paths.src + '/assets/img/favicon.png',
      template: paths.src + '/views/blog.html', // template file
      inject: true,
      chunks: ['blog'],
      filename: 'blog.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),

    new HtmlWebpackPlugin({
      title: 'social',
      favicon: paths.src + '/assets/img/favicon.png',
      template: paths.src + '/views/social.html', // template file
      inject: true,
      chunks: ['social'],
      filename: 'social.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),

    new HtmlWebpackPlugin({
      title: 'mapme',
      favicon: paths.src + '/assets/img/favicon.png',
      template: paths.src + '/views/mapme.html', // template file
      inject: true,
      chunks: ['mapme'],
      filename: 'mapme.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),

    new HtmlWebpackPlugin({
      title: 'forms',
      favicon: paths.src + '/assets/img/favicon.png',
      template: paths.src + '/views/forms.html', // template file
      inject: true,
      chunks: ['forms'],
      filename: 'forms.html', // output file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),

    // new HtmlWebpackPartialsPlugin({
    //   path: paths.src + '/partials/header.html',
    //   location: 'header',
    //   template_filename: ['index.html'],
    // }),

    // new MergeIntoSingleFilePlugin({
    //   // 👈  merge util.js and components .js files
    //   files: {
    //     'frontend.js': [
    //       paths.src + '/assets/js/util.js',
    //       paths.src + '/assets/js/components/**/*.js',
    //       paths.src + '/js/scripts.js',
    //     ],
    //   },
    // }),

    // new BundleAnalyzerPlugin({ generateStatsFile: true }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      // Images: Copy image files to build folder
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },

      {
        // https://webpack.js.org/guides/asset-modules/#replacing-inline-loader-syntax
        resourceQuery: /raw/,
        type: 'asset/source',
      },

      {
        // https://webpack.js.org/loaders/html-loader/#usage
        test: /\.html$/,
        resourceQuery: /template/,
        loader: 'html-loader',
      },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  },
}
