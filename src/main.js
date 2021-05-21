// import { createApp } from "vue";
// import App from "./app.vue";
//
// const app = createApp(App);
// app.mount("#app");
//
// if (import.meta.hot) {
//   import.meta.hot.accept();
//   import.meta.hot.dispose(() => {
//     app.unmount();
//   });
// }
//

// https://www.snowpack.dev/concepts/hot-module-replacement

// vue2  没找到hmr

// 可自己使用 路由 vuex
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./app.vue";
import router from "./router/index";

Vue.use(ElementUI);

let app = new Vue({
  router,
  render: (h) => h(App),
});
app.$mount(document.getElementById("root"));

if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
    window.location.reload(); // 强刷新
  });
}
