/// <reference path="../env.d.ts" />

import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  routes: [{ path: "/", component: () => import("../views/Index.vue") }],
  history: createWebHistory(process.env.npm_package_name),
  strict: true,
});
