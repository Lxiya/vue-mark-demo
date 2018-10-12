//import dependencies
import Vue from "vue";
import VueRouter from "vue-router";

//import components
import Layout from "./components/Layout";

import IndexPage from "./pages/Index";

import DetailPage from "./pages/Detail";
import DetailAnalysis from "./pages/detail/Analysis";
import DetailForecast from "./pages/detail/Forecast";
import DetailCount from "./pages/detail/Count";
import DetailPublish from "./pages/detail/Publish";

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
      component: DetailPage,
      redirect: "/detail/count",
      children: [
        {
          path: "analysis",
          component: DetailAnalysis
        },
        {
          path: "forecast",
          component: DetailForecast
        },
        {
          path: "count",
          component: DetailCount
        },
        {
          path: "publish",
          component: DetailPublish
        }
      ]
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
