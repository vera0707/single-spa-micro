module.exports = {
  publicPath: '//10.1.193.42:4002',
  filenameHashing: false,
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
    },
    output: {
      libraryTarget: "umd",
      globalObject: "this",
      jsonpFunction: 'webpackJsonp_websiteVue'
    },
  },
  devServer: {
    port: 4002,
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    disableHostCheck: true,
    historyApiFallback: true,
  },
};
