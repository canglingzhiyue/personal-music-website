import Vue from "vue";
import App from "./App";
import router from "./router";
import "./assets/css/index.scss";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/js/iconfont.js";
import "@/assets/js/iconfont1.js";
import "@/assets/js/iconfont2.js";
import "@/assets/js/iconfont3.js";
import "@/assets/js/iconfont4.js";
import store from "./store";

Vue.use(ElementUI);

Vue.config.productionTip = false;

// 登录拦截
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (localStorage.getItem("consumerName")) {
      next();
    } else {
      next({
        // 返回登录页面
        path: "/",
      });
    }
  } else {
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  render: (h) => h(App),
});
