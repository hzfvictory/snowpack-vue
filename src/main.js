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
import Vue from "vue";
import App from "./app.vue";

  let app = new Vue({ render: (h) => h(App) });
  app.$mount(document.getElementById("root"));

if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
