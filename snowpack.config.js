module.exports = {
  mode: "development",
  mount: {
    public: "/",
    src: "/_build_",
  },
  plugins: [
    "@snowpack/plugin-webpack",
    // "@snowpack/plugin-vue",
    "snowpack-vue2-plugin",
    "@snowpack/plugin-sass",
    "@snowpack/plugin-dotenv",
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
