const CompressionWebpackPlugin = require("compression-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

module.exports = {
  mode: "development",
  mount: {
    public: "/",
    src: "/_build_",
  },
  plugins: [
    [
      "@snowpack/plugin-webpack",
      {
        manifest: true,
        extendConfig: (config) => {
          config.plugins.push(
            new ProgressBarPlugin(),
            new CompressionWebpackPlugin({
              filename: "[path].gz[query]", // 压缩后的文件策略
              algorithm: "gzip", // 压缩方式
              test: /\.(js|css|html|svg)$/, // 可设置需要压缩的文件类型
              threshold: 10240, // 大于 10 kb 的文件启用压缩
              minRatio: 0.8, // 压缩比率大于等于0.8时不进行压缩
              deleteOriginalAssets: false, // 是否删除压缩前的文件，默认false
            }),
          );
          console.log(1212, config);
          return config;
        },
      },
    ],
    // "@snowpack/plugin-vue", // 仅支持 vue3
    "snowpack-vue2-plugin",
    "@snowpack/plugin-sass",
    "@snowpack/plugin-dotenv", // 环境变量
  ],
  devOptions: {
    port: 9988,
  },
  env: {
    ...process.env,
    API_URL: "api.google.com",
  },
  alias: {
    vue: "vue/dist/vue.esm.js",
    src: "./src",
    "@": "./src",
    assets: "./src/assets",
  },
};
