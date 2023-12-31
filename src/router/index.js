import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/Sales",
    name: "home",
    component: () => import("../components/MainPage.vue"),
  },
  {
    path: "/Sales",
    name: "Sales",
    component: () => import("../Views/SalesView.vue"),
  },
  {
    path: "/Inventory",
    name: "Inventory",
    component: () => import("../components/Inventory/Inventory.vue"),
  },
  {
    path: "/Products",
    name: "Products",
    component: () => import("../components//Product/Products.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
