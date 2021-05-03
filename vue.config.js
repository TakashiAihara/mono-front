module.exports = {
  devServer: {
    host: "0.0.0.0"
  },
  configureWebpack: {
    devtool: "source-map"
  },
  transpileDependencies: [
    'vuetify'
  ]
};
