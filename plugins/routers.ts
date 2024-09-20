/// <reference path="../env.d.ts" />

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const scoreBoardRoutes: RouteRecordRaw[] = [
  {
    path: "mono",
    component: () => import("../components/Boards/MonoScoreBoard.vue"),
  },
  {
    path: "duo",
    component: () => import("../components/Boards/DuoScoreBoard.vue"),
  },
];

export default createRouter({
  routes: [
    { path: "/", component: () => import("../views/Index.vue") },
    {
      path: "/boards",
      children: scoreBoardRoutes,
      component: () => import("../views/Boards.vue"),
    },
  ],
  history: createWebHistory(process.env.npm_package_name),
  strict: true,
});
