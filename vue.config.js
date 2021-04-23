module.exports = {
  devServer: {
    host: "ubuntu"
  },
  configureWebpack: {
    devtool: "source-map"
  },

  transpileDependencies: [
    'vuetify'
  ]
};
