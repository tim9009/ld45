module.exports = {
  publicPath: '',
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_global.scss";`
      }
    }
  }
};