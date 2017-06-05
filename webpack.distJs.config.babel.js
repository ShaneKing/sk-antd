export default {
  entry: {
    'sk.antd': './src/index.js'
  },

  output: {
    // path: 'dist/js',
    filename: '[name].js',
    library: 'AntD',
    libraryTarget: 'umd'
  },

  externals: [
    {
      'antd': {
        root: 'antd',
        commonjs2: 'antd',
        commonjs: 'antd',
        amd: 'antd'
      }
    },
    {
      'classnames/dedupe': {
        root: 'classNames',
        commonjs2: 'classNames',
        commonjs: 'classNames',
        amd: 'classNames'
      }
    },
    {
      'countup.js': {
        root: 'CountUp',
        commonjs2: 'countup.js',
        commonjs: 'countup.js',
        amd: 'countup.js'
      }
    },
    {
      'echarts': {
        root: 'echarts',
        commonjs2: 'echarts',
        commonjs: 'echarts',
        amd: 'echarts'
      }
    },
    {
      'element-resize-event': {
        root: 'elementResizeEvent',
        commonjs2: 'element-resize-event',
        commonjs: 'element-resize-event',
        amd: 'element-resize-event'
      }
    },
    {
      'jdenticon': {
        root: 'Jdenticon',
        commonjs2: 'jdenticon',
        commonjs: 'jdenticon',
        amd: 'jdenticon'
      }
    },
    {
      'jquery': {
        root: '$',
        commonjs2: 'jquery',
        commonjs: 'jquery',
        amd: 'jquery'
      }
    },
    {
      'js-cookie': {
        root: 'Cookies',
        commonjs2: 'js-cookie',
        commonjs: 'js-cookie',
        amd: 'js-cookie'
      }
    },
    {
      'js-md5': {
        root: 'md5',
        commonjs2: 'js-md5',
        commonjs: 'js-md5',
        amd: 'js-md5'
      }
    },
    {
      'lodash': {
        root: '_',
        commonjs2: 'lodash',
        commonjs: 'lodash',
        amd: 'lodash'
      }
    },
    {
      'moment': {
        root: 'moment',
        commonjs2: 'moment',
        commonjs: 'moment',
        amd: 'moment'
      }
    },
    {
      'nprogress': {
        root: 'NProgress',
        commonjs2: 'nprogress',
        commonjs: 'nprogress',
        amd: 'nprogress'
      }
    },
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    },
    {
      'react-router': {
        root: 'ReactRouter',
        commonjs2: 'react-router',
        commonjs: 'react-router',
        amd: 'react-router'
      }
    },
    {
      'sk-js': {
        root: 'SK',
        commonjs2: 'sk-js',
        commonjs: 'sk-js',
        amd: 'sk-js'
      }
    },
    {
      'sk-l10n': {
        root: 'L10N',
        commonjs2: 'sk-l10n',
        commonjs: 'sk-l10n',
        amd: 'sk-l10n'
      }
    }
  ],

  module: {
    loaders: [
      {test: /\.js/, loader: 'babel?cacheDirectory', exclude: /node_modules/}
    ]
  },

  cache: true,
  debug: true,
  stats: {
    colors: true,
    reasons: true,
    hash: true,
    version: true,
    timings: true,
    chunks: true,
    chunkModules: true,
    cached: true,
    cachedAssets: true
  }
};
