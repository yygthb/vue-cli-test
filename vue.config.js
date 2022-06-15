const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/styles/index.scss";
        `,
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-cli-test/' : '/',
  productionSourceMap: false,
});
