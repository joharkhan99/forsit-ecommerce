import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layout/DefaultLayout.vue";
import RevenueAnalysisView from "../views/RevenueAnalysis.vue";
import DashboardView from "../views/DashboardView.vue";
import AddProductView from "../views/AddProductView.vue";
import InventoryView from "../views/InventoryView.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "dashboard",
        component: DashboardView,
      },
      {
        path: "/revenue-analysis",
        name: "RevenueAnalysis",
        component: RevenueAnalysisView,
      },
      {
        path: "/add-product",
        name: "AddProduct",
        component: AddProductView,
      },
      {
        path: "/inventory",
        name: "Inventory",
        component: InventoryView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
