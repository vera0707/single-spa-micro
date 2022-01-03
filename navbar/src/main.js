import { h,createApp } from "vue";
import App from "./App.vue";
import singleSpaVue from "single-spa-vue";

// 支持应用独立运行、部署，不依赖于基座应用
if (!window.singleSpaNavigate) {
  createApp(App).mount('#app')
}

const vueLifecycle = singleSpaVue({
  createApp,
  appOptions: {
    el: domElementGetter(),
    render() {
      return h(App, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecyle-props
        // name: this.name,
        // mountParcel: this.mountParcel,
        // singleSpa: this.singleSpa,
      });
    },
  },
  handleInstance: () => {
    // app.use(router);
  }
});

export function bootstrap(props) {
  console.log("navbar bootstrap", props);
  return vueLifecycle.bootstrap(() => { });
}

export function mount(props) {
  console.log("navbar mount", props);
  return vueLifecycle.mount(() => { });
}

export function unmount(props) {
  console.log("navbar unmount", props);
  return vueLifecycle.unmount(() => { });
}

function domElementGetter() {
  let el = document.getElementById("navbar");
  if (!el) {
    el = document.createElement("div");
    el.id = "navbar";
    document.body.appendChild(el);
  }
  return "#navbar";
}
