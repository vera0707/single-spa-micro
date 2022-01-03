import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import singleSpaVue from "single-spa-vue";

Vue.config.productionTip = false;

const appOptions = {
  router,
  store,
  render: (h) => h(App),
};

const domElementGetter = (appId = 'app') => {
  let el = document.getElementById(appId);
  if (!el) {
    el = document.createElement('div');
    el.id = appId;
    document.body.appendChild(el);
  }
  return `#${appId}`;
};

// 支持应用独立运行、部署，不依赖于基座应用
if (!window.singleSpaNavigate) {
  new Vue(appOptions).$mount("#app");
}

appOptions.el = domElementGetter();
const vueLifecycle = singleSpaVue({
  Vue,
  appOptions:{
    ...appOptions,
    el: domElementGetter('vueApp')
  },
});

export function bootstrap(props) {
  console.log("vue bootstrap", props);
  return vueLifecycle.bootstrap(() => { });
}

export function mount(props) {
  console.log("vue mount", props);
  return vueLifecycle.mount(() => { });
}

export function unmount(props) {
  console.log("vue unmount", props);
  return vueLifecycle.unmount(() => { });
}