import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layout/DefaultLayout.vue";
import RevenueAnalysis from "../views/RevenueAnalysis.vue";
import DashboardView from "../views/DashboardView.vue";
import AddProduct from "../views/AddProductView.vue";

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
        component: RevenueAnalysis,
      },
      {
        path: "/add-product",
        name: "AddProduct",
        component: AddProduct,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
