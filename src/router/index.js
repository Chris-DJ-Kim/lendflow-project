import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import OrganizationPage from "../views/OrganizationPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/org/:orgName/details",
    name: "Organization",
    component: OrganizationPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
