import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BrowseView from "../views/BrowseView.vue";
import HoursView from "../views/HoursView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/browse",
      name: "browse",
      component: BrowseView,
    },
    {
      path: "/hours",
      name: "hours",
      component: HoursView,
    },
  ],
});

export default router;
