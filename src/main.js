import Vue from "vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
Vue.use(Antd);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
