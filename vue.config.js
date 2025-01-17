module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => ({
        ...options,
        // Ensure compatibility with webpack 5
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('custom-'),
        },
      }));
  },
};