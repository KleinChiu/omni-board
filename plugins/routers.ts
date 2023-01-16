/// <reference path="../env.d.ts" />

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export default createRouter({
  routes: [
    { path: "/", component: () => import("../views/Index.vue") },
    {
      path: "/boards",
      component: () => import("../views/Boards.vue"),
    },
  ],
  history: createWebHistory(process.env.npm_package_name),
  strict: true,
});
