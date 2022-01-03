module.exports = {
  publicPath: '//10.1.193.42:4001',
  filenameHashing: false,
  productionSourceMap: false,
  mode: 'production',
  configureWebpack: {
    output: {
      jsonpFunction: 'webpackJsonp_websiteVue'
    },
    resolve: {
      extensions: [".js", ".vue", ".json"],
    },
    output: {
      libraryTarget: "umd",
      globalObject: "this",
    },
  },
  devServer: {
    port: 4001,
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    disableHostCheck: true,
    historyApiFallback: true,
  },
};
