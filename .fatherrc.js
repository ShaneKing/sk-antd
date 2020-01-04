export default {
  // cjs: { type: 'babel' },
  cjs: 'babel',
  doc: {
    base: '/sk-react-antd',
  },
  entry: 'src/index.js',
  esm: 'babel',
  extraBabelPlugins: [
    ['babel-plugin-import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }],
  ],
};
