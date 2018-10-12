//import dependencies
import Vue from "vue";
import VueRouter from "vue-router";

//import components
import Layout from "./components/Layout";
import IndexPage from "./pages/Index";
import DetailPage from "./pages/Detial";

Vue.use(VueRouter);
let router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: IndexPage
    },
    {
      path: "/detail",
      component: DetailPage
    }
  ]
});

new Vue({
  el: "#app",
  router,
  template: "<Layout/>",
  components: {
    Layout
  }
});
